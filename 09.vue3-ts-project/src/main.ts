import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalRegister from './global'

import { setupStore } from './store'

const app = createApp(App)

globalRegister(app)

app.use(store).use(router).mount('#app')

setupStore()
