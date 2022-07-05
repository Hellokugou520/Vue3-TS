const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 配置ElementPlus的自动导入
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()]
      }),
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
