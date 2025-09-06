<template>
    <div>
        <img class="img" :src="imgData.data.imgHerf" alt="" srcset="">
        <div class="info">
            <ul>
                <li>
                    作品名称：{{ imgData.data.name }}
                </li>
                <li>
                    作品ID：{{ imgData.data.id }}
                </li>
                <li>
                    <el-button @click="back()">返 回</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute,useRouter } from 'vue-router'
// 路由信息
const $route = useRoute()
// 路由对象
const $router = useRouter()
console.log($route.query);
// 数据
const imgData = reactive({
    data: {
        id: 0,
        imgHerf: '#',
        name: ''
    }
})
if ($route.query.id) {
    imgData.data = { ...$route.query }
}
// 返回
function back(){
    $router.back()
}
</script>

<style lang="scss" scoped>
// 图片
.img {
    display: block;
    margin: 20px auto;
    padding: 10px;
    border: 1px #888 solid;
    box-shadow: 0px 0px 5px #333;
    max-width: 1100px;
}

// 作品信息
.info {
    padding: 10px;
    border: 1px #888 solid;
    box-shadow: 0px 0px 5px #333;
    width: 600px;
    margin: 20px auto;
    li{
        line-height: 40px;
    }
}
</style>