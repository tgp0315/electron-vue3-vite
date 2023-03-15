import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from  'pinia'
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
// 将插件提供给store实例
store.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
