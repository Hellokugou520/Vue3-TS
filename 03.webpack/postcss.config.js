// 使用postcss自身的配置文件，Loader将会自动搜索配置文件，在webpack.config.js中就可以写的简单一点
module.exports = {
    plugins: [
        [
            'postcss-preset-env'
        ]
    ]
}