import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosRequest from './service'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).mount('#app')

// axiosRequest.request({
//   url: '/get',
//   interceptors: {
//     // 该请求独占的拦截器
//     requestInterceptor: (config) => {
//       console.log('请求独占的请求拦截器')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('请求独占的响应拦截器')
//       return res
//     }
//   }
// })

interface DataType {
  args: any
  headers: any
  origin: string
  url: string
}

axiosRequest
  .request<DataType>({
    url: '/get',
    showLoading: true
  })
  .then((res) => {
    console.log(res)
  })
