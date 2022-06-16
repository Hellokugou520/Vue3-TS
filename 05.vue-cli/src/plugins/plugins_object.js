// 插件的对象写法
export default {
    // 安装函数接收应用实例和传递给 app.use()的额外选项
    install (app, options) {
        console.log('插件的对象写法', { app, options })
        app.config.globalProperties.$globalValue = '全局属性值'
    }
}