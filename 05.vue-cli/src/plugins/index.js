import plugins_object from './plugins_object'
import plugins_function from './plugins_function'

export default function registerPlugins (app) {
    // 安装一个插件
    app.use(plugins_object, {
        name: "plugins",
    })
    app.use(plugins_function)
}