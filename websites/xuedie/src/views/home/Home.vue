<template>
    <div>
        <!-- 顶部 -->
        <header>
            <div class="logo-box">
                <div class="containerCenter">
                    <div class="logo"></div>
                    <h1>
                        中国雪蝶字幕社
                    </h1>
                </div>
            </div>
            <!-- 轮播图 -->
            <div class="swiper-box">
                <swiper :slides-per-view="1" loop :modules="modules" :autoplay="{ autoplay: true }"
                    :pagination="{ clickable: true }" :navigation="true">
                    <swiper-slide v-for="(item, index) in bannerList" :key="index">
                        <img class="banner-item" :src="item" alt="" srcset="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="nav">
                <div class="container">
                    <Links />
                </div>
            </div>
        </header>
        <!-- 内容 -->
        <main>
            <!-- color="#6bb8ff" -->
            <!-- 介绍 -->
            <HomeItem title="社团介绍">
                <div class="desc-box">
                    <img class="logo-big" src="../../assets/img/logo.png" alt="">
                    <div class="desc">
                        <p>
                            雪蝶字幕社团由社长聆听蝴蝶创建及领导的社团之一。社团成立于2020年4月10。
                            社团大致分为三个部分雪蝶字幕社团主社、雪蝶字幕社团分社、雪蝶字幕社团审核群三个，
                            我社不仅仅只局限于字幕翻译等还包括小说、绘画、剪辑、动画、特效等超多内容，同时不同的内容我们社团也有相应的分社，
                            这些分社主要是用来更好的规划人员。和社团核心分社作用不同，核心的分社主要作用是用来对社团整体的发展进行规范化整理，
                            而且其主要目的就是为了社团更好的发展，核心分社只有社团合格社员，具有较高的技术含量，
                            又有能为社团发展做贡献等方面的才可加入到分社。
                        </p>
                        <p>
                            社团的英文名是:Snow butterfly subtitle Club简称:SFSC
                        </p>
                        <p>
                            我社团还有PT专用分社，只聊与PT有关的话题。
                        </p>
                    </div>
                </div>
                <div class="info">
                    <ul>
                        <li><el-icon color="#1093ff" size="30">
                                <Menu />
                            </el-icon>&nbsp;社团名称: 雪蝶字幕社</li>
                        <li><el-icon color="#1093ff" size="30">
                                <UserFilled />
                            </el-icon>&nbsp;社长: 樱花</li>
                        <li><el-icon color="#1093ff" size="30">
                                <Clock />
                            </el-icon>&nbsp;创建时间: 2020年4月10日</li>
                        <li><el-icon color="#1093ff" size="30">
                                <Flag />
                            </el-icon>&nbsp;规模: 40-60人</li>
                    </ul>
                </div>
            </HomeItem>
            <!-- 构成 -->
            <HomeItem title="部门构成" color="skyblue">
                <div class="skill">
                    <img src="../../assets/img/mg.png" alt="" srcset="">
                    <div class="skill-info">
                        <h2>美术</h2>
                        <p>
                            主要职责为绘制图片、以使用绘图软件绘制或者手工绘制之类的方式完成人物、小马、场景、插图以及完成活动所需的海报和活动说需要的美术资源。
                        </p>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-info">
                        <h2>翻译</h2>
                        <p>
                            对视频或其它作品中的字幕做语言翻译工作，以便于更多的人观阅视频内容，为马圈做出贡献。
                        </p>
                    </div>
                    <img class="img-right" src="../../assets/img/fy.jpg" alt="" srcset="">
                </div>
                <div class="skill">
                    <img src="../../assets/img/video.png" alt="" srcset="">
                    <div class="skill-info">
                        <h2>视频制作与剪辑</h2>
                        <p>
                            制作社团活动所需的视频用于节目或发布平台等，以及对社团内部需要处理的录制视频进行剪辑工作。
                        </p>
                    </div>
                </div>
                <div>
                    <button class="linkbtn" @click="toLink('/layout/skill')">点我查看更多</button>
                </div>
            </HomeItem>
            <!-- 作品 -->
            <HomeItem title="作品展示">
                <div class="imglist">
                    <div class="img-content">
                        <img class="img-item" v-for="(item, index) in imgs" :key="index" :src="item" alt="" srcset="">
                    </div>
                </div>
                <div class="btn-box">
                    <button class="linkbtn" @click="toLink('/layout/works')">点我查看更多</button>
                </div>
            </HomeItem>
            <!-- 合作伙伴 -->
            <HomeItem title="合作伙伴" color="skyblue">
                <div class="coops">
                    <span>拂晓工作室</span>
                    <span>极云星火工作室</span>
                    <span>马国记忆.EquestriaMemory</span>
                    <span>马圈视野</span>
                    <span>BrCo社区</span>
                    <span>DHLF翻译组</span>
                    <span>小马利亚魔法科学研究所</span>
                    <span>哈尔滨马展(HRBC)</span>
                </div>
            </HomeItem>
            <!-- 加入我们 -->
            <HomeItem title="联系方式">
                <ul class="relation">
                    <li>
                        <span class="font">商务合作</span>&nbsp;樱花&nbsp;QQ:1419624386
                    </li>
                    <li>
                        <span class="font">加入我们</span>&nbsp;中国雪蝶字幕社&nbsp;Q群:1079379498
                    </li>
                </ul>
            </HomeItem>
        </main>
        <footer>
            中国雪蝶字幕社
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Links from '../../components/home/Links.vue'
import HomeItem from '../../components/home/HomeItem.vue'
import { Clock, UserFilled, Menu, Flag } from '@element-plus/icons-vue'
// 导入路由函数
import { useRouter } from 'vue-router'
const $router = useRouter()
// 跳转
const toLink = (url) => {
    $router.push(url)
}
const modules = ref([Autoplay, Pagination, Navigation])
// 图片
const bannerList = [
    new URL("../../assets/img/large1.png", import.meta.url).href,
    new URL("../../assets/img/large2.png", import.meta.url).href,
    new URL("../../assets/img/large3.png", import.meta.url).href
]
const imgs = [
    new URL("../../assets/img/works/zp1.jpg", import.meta.url).href,
    new URL("../../assets/img/works/zp2.jpg", import.meta.url).href,
    new URL("../../assets/img/works/zp3.jpg", import.meta.url).href,
    new URL("../../assets/img/works/zp4.jpg", import.meta.url).href,
    new URL("../../assets/img/works/zp5.jpg", import.meta.url).href
]
// 跳转

</script>

<style lang="scss" scoped>
@import "../../assets/style/colors.scss";

// logo
.logo-box {
    background-color: $myblue;
    height: 70px;

    .logo {
        display: inline-block;
        width: 70px;
        height: 70px;
        background-image: url('../../assets/img/logo.png');
        background-size: 100% 100%;
    }

    h1 {
        display: inline-block;
        color: #fff;
    }
}

// 轮播图
.swiper-box {
    width: 100%;
    height: 300px;
    background-color: #eee;
}

.banner-item {
    width: 100vw;
    height: 300px;
    background-size: cover ;
}

// 导航栏
.nav {
    background-color: $myblue;
    height: 70px;
}

// 内容
main {
    padding-bottom: 50px;
}

// 跳转按钮
.linkbtn {
    display: block;
    margin: auto;
    background-color: #0a83e6;
    height: 50px;
    width: 240px;
    border-radius: 25px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0px 0px 5px #888;
    cursor: pointer;
}

.linkbtn:hover {
    background-color: yellow;
    color: #888;
}

// 按钮布局
.btn-box {
    margin: 15px 0;
}

.desc-box {
    display: flex;
    justify-content: space-between;
    border: 1px #888 solid;
    padding: 15px;
    border-radius: 10px;

    .logo-big {
        width: 300px;
        height: 300px;
    }

    .desc {
        width: 800px;
        height: 300px;
    }

    p {
        text-indent: 2em;
        font-size: 20px;
    }
}

// 介绍
.info {
    li {
        padding-left: 15px;
        display: flex;
        align-items: center;
        font-weight: bold;
        margin: 15px 0;
        border: 1px #1093ff solid;
        border-radius: 15px;
        line-height: 40px;
        box-shadow: 0px 0px 5px #888;
        width: 500px;
    }
}

// 部门构成
.skill {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px #666;
    overflow: hidden;

    img {
        height: 300px;
        width: 300px;
        background-size: 100% 100%;
        vertical-align: top;
    }

    .skill-info {
        display: inline-block;
        padding: 15px;
    }

    h2 {
        line-height: 50px;
    }

    p {
        width: 500px;
        font-size: 20px;
    }

    .img-right {
        position: absolute;
        right: 0;
    }
}

// 作品展示
.imglist {
    width: 100%;
    height: 320px;
    border: 1px #888 solid;
    box-shadow: 0px 0px 5px #333;
    padding: 10px;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .img-content {
        white-space: nowrap;
        height: 300px;
    }

    .img-item {
        width: 300px;
        height: 300px;
        background-size: 100% 100%;
        margin: 0 5px;
    }
}
// 合作伙伴
.coops{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    span{
        margin: 10px;
        color: #17bdff;
        background-color: #fff;
        padding: 5px;
        box-shadow: 0px 0px 7px #333;
        cursor: pointer;
    }
}
// 联系
.relation{
    font-weight: bold;
    line-height: 40px;
    span{
        color: $myblue;
    }
}
// 页底
footer{
    height: 120px;
    background-color: $myblue;
    color: #fff;
    text-align: center;
    line-height: 120px;
}
</style>