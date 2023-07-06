<template>
    <div class="link-list">
        <router-link v-for="(item,index) in linkList" :key="index" class="link-item" :to="item.path">
            {{ item.title }}
        </router-link>
    </div>
</template>

<script setup>
// 路由名单
const linkList = [
    {
        title:'首页',
        path:'/home'
    },
    {
        title:'社团成员',
        path:'/layout/members'
    },
    {
        title:'部门分职',
        path:'/layout/skill'
    },
    {
        title:'作品展示',
        path:'/layout/works'
    }
]
</script>

<style lang="scss" scoped>
.link-list {
    line-height: 70px;

    a {
        color: #fff;
        text-decoration: none;
    }
    a:hover{
        color: yellow;
    }
    .link-item {
        margin: 0 15px;
    }
}
</style>