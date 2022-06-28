const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.cjs', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            title: 'webpack-ts'
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
        }),
    ],
    mode: 'development'
}