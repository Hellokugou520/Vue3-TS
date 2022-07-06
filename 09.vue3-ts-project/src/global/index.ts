import { App } from 'vue'
import registerEP from './element-plus'
import './style.ts'

const globalRegister = (app: App<Element>) => {
  registerEP(app)
}

export default globalRegister
