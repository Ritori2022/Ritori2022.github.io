<template>
    <div :style="{ backgroundColor: prop.color }" class="home-item">
        <div class="container">
            <h2 class="title"><span class="gold">--</span>&emsp;{{ prop.title }}&emsp;<span class="gold">--</span></h2>
            <slot>

            </slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, reactive } from "vue"
const prop = defineProps({
    color: '#fff',
    title: ''
})
// console.log(prop);
</script>

<style lang="scss" scoped>
.home-item {
    padding-bottom: 20px;
    .gold {
        color: gold;
        line-height: 80px;
    }
    .title {
        text-align: center;
    }
}
</style>