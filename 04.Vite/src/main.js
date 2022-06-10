import { sum } from './js/math'
import { multiplication } from './ts/mul'

import './css/style.css'
import './css/style.less'

import { createApp } from 'vue'
import App from './vue/App.vue'

console.log('Hello World')
console.log('和：', sum(1, 2))
console.log('积：', multiplication(1, 2))

createApp(App).mount('#app')