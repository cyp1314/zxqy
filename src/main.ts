import { createApp } from 'vue'
import App from './App.vue'


import './assets/css/index.css'

// 引入创建pinia的方法
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);

// 引入路由
import router from './route';

// 引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import locale from 'element-plus/lib/locale/lang/zh-cn'

// 创建app实例
export const app = createApp(App);

// 使用路由
app.use(router)
// 创建pinia仓库实例
app.use(pinia)

// 使用ElementPlus
app.use(ElementPlus, { locale })

// 挂载app
app.mount('#app')
