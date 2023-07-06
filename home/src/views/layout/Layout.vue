<template>
    <div>
        <!-- 顶部 -->
        <div class="logo-box">
            <div class="containerCenter">
                <div class="logo"></div>
                <h1>
                    中国雪蝶字幕社
                </h1>
                <div class="links-box">
                    <Links />
                </div>
            </div>
        </div>
        <!-- 出口 -->
        <div class="container">
            <div class="main">
                <router-view />
            </div>
        </div>
        <!-- 页底 -->
        <footer>
            中国雪蝶字幕社
        </footer>
    </div>
</template>

<script setup>
import Links from '../../components/home/Links.vue'
</script>

<style lang="scss" scoped>
@import "../../assets/style/colors.scss";

// 顶部
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

    .links-box {
        padding-left: 100px;
    }
}

// 出口布局
.main{
    position: relative;
    width: 1200px;
    min-height: 100vh;
}

// 页底
footer {
    bottom: 0;
    height: 120px;
    width: 100%;
    background-color: $myblue;
    color: #fff;
    text-align: center;
    line-height: 120px;
}
</style>