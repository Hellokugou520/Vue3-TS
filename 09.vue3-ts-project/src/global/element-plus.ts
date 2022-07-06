/**
 * create user: zhanpengwei
 * create date: 2022-07-07
 * desc: element-plus相关注册
 */
import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

// 全局注册图标
const registerEP = (app: App<Element>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerEP
