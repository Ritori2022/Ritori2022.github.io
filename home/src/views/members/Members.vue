<template>
    <div>
        <h1 class="page-title">社团成员</h1>
        <p>部分社团成员&emsp;录入时间2023年4月2日</p>
        <div class="member-list">
            <div v-for="(item,index) in data" :key="index" class="member">
                <img :src="item.imgHref" alt="" srcset="">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
// 数据
const data = [
    {
        name:'桃恩',
        imgHref:new URL("../../assets/img/member/taoen.jpg",import.meta.url).href
    },
    {
        name:'圣光辉辉',
        imgHref:new URL("../../assets/img/member/sghh.jpg",import.meta.url).href
    },
    {
        name:'苍星暗暗',
        imgHref:new URL("../../assets/img/member/changxinanan.jpg",import.meta.url).href
    },
    {
        name:'繁茂橡木',
        imgHref:new URL("../../assets/img/member/OakLively.jpg",import.meta.url).href
    },
    {
        name:'彩虹',
        imgHref:new URL("../../assets/img/member/rainbow.jpg",import.meta.url).href
    },
    {
        name:'风星',
        imgHref:new URL("../../assets/img/member/fenxin.jpg",import.meta.url).href
    },
    {
        name:'樱酱',
        imgHref:new URL("../../assets/img/member/yinjiang.jpg",import.meta.url).href
    },
    {
        name:'烁虹',
        imgHref:new URL("../../assets/img/member/shuohong.jpg",import.meta.url).href
    },
    {
        name:'火程',
        imgHref:new URL("../../assets/img/member/fire.jpg",import.meta.url).href
    },
    {
        name:'欧瑞斯',
        imgHref:new URL("../../assets/img/member/oris.jpg",import.meta.url).href
    },
    {
        name:'ET-Raindoom',
        imgHref:new URL("../../assets/img/member/ET-Raindoom.jpg",import.meta.url).href
    },
    {
        name:'金苹果派',
        imgHref:new URL("../../assets/img/member/GoldenApplePie.jpg",import.meta.url).href
    },
    {
        name:'云星',
        imgHref:new URL("../../assets/img/member/cloudstar.jpg",import.meta.url).href
    },
    {
        name:'三叶虫',
        imgHref:new URL("../../assets/img/member/trilobita.jpg",import.meta.url).href
    },
    {
        name:'炜小蝶',
        imgHref:new URL("../../assets/img/member/fwei.jpg",import.meta.url).href
    },
    {
        name:'落星',
        imgHref:new URL("../../assets/img/member/metestar.jpg",import.meta.url).href
    },
    {
        name:'ponies',
        imgHref:new URL("../../assets/img/member/ponies.jpg",import.meta.url).href
    },
    {
        name:'尤克里里',
        imgHref:new URL("../../assets/img/member/ukulele.jpg",import.meta.url).href
    },
    {
        name:'暖阳',
        imgHref:new URL("../../assets/img/member/nuanyang.jpg",import.meta.url).href
    },
    {
        name:'阿波菲斯',
        imgHref:new URL("../../assets/img/member/apophis.jpg",import.meta.url).href
    },
    {
        name:'辰',
        imgHref:new URL("../../assets/img/member/chen.jpg",import.meta.url).href
    },
    {
        name:'刀刀',
        imgHref:new URL("../../assets/img/member/daodao.jpg",import.meta.url).href
    },
    {
        name:'韵华',
        imgHref:new URL("../../assets/img/member/rainflowe.jpg",import.meta.url).href
    },
    {
        name:'村本红枫',
        imgHref:new URL("../../assets/img/member/chunbenhongfen.jpg",import.meta.url).href
    },
    {
        name:'青云',
        imgHref:new URL("../../assets/img/member/qyun.jpg",import.meta.url).href
    },
    {
        name:'樱花',
        imgHref:new URL("../../assets/img/member/yinhua.jpg",import.meta.url).href
    }
]
</script>

<style lang="scss" scoped>
// 成员
.member-list{
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    .member{
        text-align: center;
        margin: 5px;
        width: 100px;
        height: 150px;
        img{
            width: 100px;
            height: 100px;
            background-color: gray;
            border-radius: 50%;
            overflow: hidden;
            border: 2px skyblue solid;
        }
    }
}
</style>