import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import './assets/style/style.scss'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus).mount('#app')
