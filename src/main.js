
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css' // 导入样式

const app = createApp(App)
app.use(router) // 使用 router
app.use(elementPlus) // 使用 element-plus
app.mount('#app')