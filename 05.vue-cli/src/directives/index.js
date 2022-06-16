/**
* create user: zhanpengwei
* create date: 2022-06-16
* desc: 全局自定义指令
*/
import registerFocus from './focus'

export default function registerDirectives (app) {
    registerFocus(app)
}