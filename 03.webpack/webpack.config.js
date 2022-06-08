const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
    entry: './src/main.js',
    output: {
        // path需要使用绝对路径，可以使用nodejs的path模块，来便捷的使用绝对路径
        path: resolve(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name]_[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            title: 'webpack'
        }),
        // 配置index.html模板中的 BASE_URL 变量的值
        new DefinePlugin({
            BASE_URL: "'./'",
            // 下面这两个全局标志主要是为了打包工具更好的实现 tree-shaking
            // enable/disable Options API support, default: true
            __VUE_OPTIONS_API__: true,
            // enable/disable devtools support in production, default: false
            __VUE_PROD_DEVTOOLS__: false
        }),
        new VueLoaderPlugin()
    ],
    // 建立打包代码和源代码之间的映射关系，方便开发时调试错误(会生成一个XXX.map文件)
    devtool: 'source-map',
    devServer: {
        open: true
    },
    mode: 'development'
}