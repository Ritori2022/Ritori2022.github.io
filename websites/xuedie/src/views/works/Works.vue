<template>
    <div>
        <h1 class="page-title">作品展示</h1>
        <div class="works-list">
            <img @click="look(item)" v-for="(item) in worksStore.worksData.data" :key="item.id" :id="item.id" class="item" :src="item.imgHerf" alt="" srcset="">
        </div>
    </div>
</template>

<script setup>
import { useWorksStore } from '../../store/index.js'
import { useRouter } from 'vue-router';
// 调取仓库
const worksStore = useWorksStore()
const $router = useRouter()
// 获取图片
worksStore.getImages()
// 查看图片
function look (obj) {
    $router.push({
        path:'/layout/works-detail',
        query:{
            ...obj
        }
    })
}
</script>

<style lang="scss" scoped>
.works-list {
    width: 100%;
    height: 100vh;
    border: 1px #888 solid;
    margin-bottom: 50px;
    box-shadow: 0px 0px 5px #333;
    overflow-x: hidden;
    overflow-y: scroll;
    .item{
        display: inline-block;
        width: 280px;
        height: 280px;
        background-size: cover;
        margin: 5px;
    }
}
</style>