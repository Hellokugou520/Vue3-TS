import { App } from 'vue'
import registerEP from './element-plus'
import './style.ts'
import { formatUtcString } from '@/utils'

const globalRegister = (app: App<Element>) => {
  registerEP(app)

  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}

export default globalRegister
