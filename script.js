// GitHub API 配置
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'Ritori2022';
const REPO_NAME = 'My-Works';

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return '今天';
    if (diffDays === 1) return '昨天';
    if (diffDays < 7) return `${diffDays}天前`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}周前`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}月前`;
    return `${Math.floor(diffDays / 365)}年前`;
}

// 获取仓库基本信息
async function fetchRepoInfo() {
    try {
        const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`);
        if (!response.ok) throw new Error('Failed to fetch repo info');

        const data = await response.json();
        return {
            stars: data.stargazers_count,
            watchers: data.watchers_count,
            forks: data.forks_count,
            updatedAt: data.updated_at,
            description: data.description,
            language: data.language
        };
    } catch (error) {
        console.error('Error fetching repo info:', error);
        return null;
    }
}

// 获取提交次数
async function fetchCommitsCount() {
    try {
        const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=1`);
        if (!response.ok) throw new Error('Failed to fetch commits');

        // 从 Link header 中获取总数
        const linkHeader = response.headers.get('Link');
        if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) return parseInt(match[1]);
        }

        // 如果没有 Link header，说明提交数少于 per_page
        const commits = await response.json();
        return commits.length;
    } catch (error) {
        console.error('Error fetching commits count:', error);
        return null;
    }
}

// 获取仓库文件树
async function fetchRepoTree() {
    try {
        // 先获取默认分支
        const repoResponse = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`);
        const repoData = await repoResponse.json();
        const defaultBranch = repoData.default_branch;

        // 获取文件树
        const response = await fetch(`${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${defaultBranch}?recursive=1`);
        if (!response.ok) throw new Error('Failed to fetch tree');

        const data = await response.json();
        return data.tree;
    } catch (error) {
        console.error('Error fetching repo tree:', error);
        return [];
    }
}

// 分类文件
function categorizeFiles(tree) {
    const categories = {
        research: [],
        novels: [],
        code: [],
        other: []
    };

    tree.forEach(item => {
        if (item.type !== 'blob') return; // 只处理文件

        const path = item.path.toLowerCase();

        if (path.includes('research') || path.includes('论文') || path.includes('研究')) {
            categories.research.push(item);
        } else if (path.includes('novel') || path.includes('小说')) {
            categories.novels.push(item);
        } else if (path.endsWith('.py') || path.endsWith('.js') || path.endsWith('.ipynb')) {
            categories.code.push(item);
        } else if (!path.includes('.git') && !path.startsWith('.')) {
            categories.other.push(item);
        }
    });

    return categories;
}

// 获取文件扩展名
function getFileExtension(filename) {
    const parts = filename.split('.');
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'FILE';
}

// 渲染文件列表
function renderFiles(categories) {
    const filesContainer = document.getElementById('myworks-files');

    const html = `
        <h4>📂 仓库结构</h4>
        <div class="file-tree">
            ${renderCategory('📖 研究论文', categories.research)}
            ${renderCategory('✍️ 小说作品', categories.novels)}
            ${renderCategory('💻 代码实验', categories.code)}
            ${categories.other.length > 0 ? renderCategory('📄 其他文件', categories.other.slice(0, 5)) : ''}
        </div>
    `;

    filesContainer.innerHTML = html;
}

// 渲染文件分类
function renderCategory(title, files) {
    if (files.length === 0) return '';

    const filesList = files.slice(0, 8).map(file => `
        <div class="file-item">
            <span class="file-name">${file.path}</span>
            <span class="file-type">${getFileExtension(file.path)}</span>
        </div>
    `).join('');

    return `
        <div style="margin-bottom: 1.5rem;">
            <h5 style="color: var(--primary-color); margin-bottom: 0.75rem; font-size: 1.1rem;">${title}</h5>
            ${filesList}
            ${files.length > 8 ? `<p style="color: var(--text-muted); font-size: 0.875rem; margin-top: 0.5rem;">...还有 ${files.length - 8} 个文件</p>` : ''}
        </div>
    `;
}

// 更新统计信息
async function updateStats() {
    const statsContainer = document.getElementById('myworks-stats');

    // 获取数据
    const [repoInfo, commitsCount] = await Promise.all([
        fetchRepoInfo(),
        fetchCommitsCount()
    ]);

    if (!repoInfo) {
        statsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted);">无法加载仓库信息</p>';
        return;
    }

    // 更新 UI
    const statItems = statsContainer.querySelectorAll('.stat-item');

    // Stars
    statItems[0].classList.remove('loading');
    statItems[0].querySelector('.stat-value').textContent = repoInfo.stars;

    // Commits
    statItems[1].classList.remove('loading');
    statItems[1].querySelector('.stat-value').textContent = commitsCount || '65+';

    // 最近更新
    statItems[2].classList.remove('loading');
    statItems[2].querySelector('.stat-value').textContent = formatDate(repoInfo.updatedAt);
}

// 加载文件树
async function loadFileTree() {
    const tree = await fetchRepoTree();
    if (tree.length > 0) {
        const categories = categorizeFiles(tree);
        renderFiles(categories);
    } else {
        document.getElementById('myworks-files').innerHTML = `
            <h4>📂 仓库最新文件</h4>
            <div class="files-loading">无法加载文件列表</div>
        `;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 正在加载 My-Works 仓库数据...');

    // 并行加载数据
    await Promise.all([
        updateStats(),
        loadFileTree()
    ]);

    console.log('✅ 数据加载完成！');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
