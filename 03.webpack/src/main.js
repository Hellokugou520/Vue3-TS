const { log } = require('./js/log')
import { sum } from './js/sum'
import './js/element'

import { createApp } from 'vue'

import App from './vue/App.vue'

log()
console.log(sum(1, 2))

createApp(App).mount('#app')