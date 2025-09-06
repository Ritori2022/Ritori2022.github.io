import { defineStore } from "pinia";
import {ref,reactive} from 'vue'
// 作品数据
export const useWorksStore = defineStore('works', () => {
    let worksData = reactive({
        data:[]
    })

    function getImages() {
        worksData.data=[]
        for (let i = 1; i <= 30; i++) {
            worksData.data.push({
                id:i,
                name:`社团作品${i}`,
                imgHerf:new URL(`../assets/img/works/zp${i}.jpg`, import.meta.url).href
            })
        }
        return worksData;
    }
    return {
        worksData,
        getImages
    }
})