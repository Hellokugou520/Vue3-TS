/**
 * create user: zhanpengwei
 * create date: 2022-07-07
 * desc: element-plus相关注册
 */
import { App } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const registerEP = (app: App<Element>) => {
  // 全局配置国际化
  app.use(ElementPlus, {
    locale: zhCn
  })

  // 全局注册图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerEP
