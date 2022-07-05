const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 配置ElementPlus的自动导入
      require('unplugin-vue-components/webpack')({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ]
      }),
      require('unplugin-auto-import/webpack')({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      require('unplugin-icons/webpack')({
        autoInstall: true
      })
    ]
  }
})
