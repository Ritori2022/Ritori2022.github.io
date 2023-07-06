<template>
    <div>
        <h1 class="page-title">部门分职</h1>
        <ul>
            <li v-for="(item,index) in data" :key="index">
                <div class="item">
                    <div class="item-title">
                        <el-icon size="30" color="#fff">
                            <Avatar />
                        </el-icon>
                        <p class="name">{{ item.name }}</p>
                    </div>
                    <div class="info">
                        <p>
                            {{ item.info }}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <p>欢迎您的加入</p>
        <p>中国雪蝶字幕社 Q群 1079379498</p>
    </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons-vue'
// 数据
const data = [
    {
        name:'监督组',
        info:'监督各组人员的任务进度。确保社团任务能有序进行并及时完成。'
    },
    {
        name: '纪律组',
        info: '主要负责好管理社团内部的违规情况。对于违规人员应当按照规定进行处理。'
    },
    {
        name:'绘画组',
        info:'负责社团的绘画任务、宣传图册等设计。同时也可以自行接稿。'
    },
    {
        name:'翻译组',
        info:'负责文案翻译、视频翻译、乐曲翻译。'
    },
    {
        name:'音效组',
        info:'负责社团主题曲、社团原创曲等歌曲的创作。'
    },
    {
        name:'动画组',
        info:'负责社团动画和合作动画的动画制作。'
    },
    {
        name:'文案组',
        info:'负责宣传文案、动画文案、合作文案等制作任务。'
    },
    {
        name:'授权组',
        info:'负责寻找优质同人作品，并获取授权，并将该作品交由翻译部处理'
    },
    {
        name:'开发组(New)',
        info:'开发组细分为前端开发，后端开发，全栈开发。负责社团网站、app等人机交互开发及维护或者后端维护和数据处理及数据库交互。(目前稀缺)'
    }
]
</script>

<style lang="scss" scoped>
@import "../../assets/style/colors.scss";
// 职位
.item {
    width: 100%;
    display: flex;
    border:  1px $myblue solid;
    margin-bottom: 15px;
    box-shadow: 0px 0px 5px #333;
    .item-title{
        text-align: center;
        background-color: $myblue;
        width: 80px;
        padding: 5px;
    }
    .name {
        font-weight: bold;
        color: #fff;
    }
    .info{
        width: 1100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 5px;
    }
}
</style>