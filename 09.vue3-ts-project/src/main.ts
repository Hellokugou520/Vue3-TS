import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalRegister from './global'

import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
// 刷新后重写vuex数据
setupStore()
app.use(router).mount('#app')
