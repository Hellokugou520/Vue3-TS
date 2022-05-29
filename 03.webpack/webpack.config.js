const { resolve } = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path需要使用绝对路径，可以使用nodejs的path模块，来便捷的使用绝对路径
        path: resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}