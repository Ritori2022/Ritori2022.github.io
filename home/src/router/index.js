import * as VueRouter from 'vue-router'
// 导入组件
import Layout from '../views/layout/Layout.vue'
// 页面配置
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        // 首页
        path:'/home',
        component:()=>import('../views/home/Home.vue')
    },
    {
        path:'/layout',
        component:Layout,
        redirect:'/layout/works',
        children:[
            {
                // 作品
                path:'works',
                component:()=>import('../views/works/Works.vue')
            },
            {
                // 作品详情
                path:'works-detail',
                component:()=>import('../views/works/WorksDetail.vue')
            },
            {
                // 成员
                path:'members',
                component:()=>import('../views/members/Members.vue')
            },
            {
                // 职位
                path:'skill',
                component:()=>import('../views/skill/Skill.vue')
            }
        ]
    }
]
// 创建路由
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes
})
// 暴露
export default router