const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
/**
 * 踩坑记录：
 * 使用图标自动引入后，同时使用后台返回的icon标识来生成动态图标
 * 目前暂未找到解决方案，因此暂时放弃使用图标自动引入功能
 */
// const IconsResolver = require('unplugin-icons/resolver')

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
          ElementPlusResolver()
          // 自动注册图标组件
          // IconsResolver({
          //   enabledCollections: ['ep']
          // })
        ]
      }),
      require('unplugin-auto-import/webpack')({
        resolvers: [
          ElementPlusResolver()
          // 自动导入图标组件
          // IconsResolver({
          //   prefix: 'Icon'
          // })
        ]
      })
      // require('unplugin-icons/webpack')({
      //   autoInstall: true
      // })
    ]
  }
})
