const { resolve } = require('path')
const ReadmeWebpackPlugin = require('./plugins/readme-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: '[name].js',
        clean: true
    },
    mode: "development",
    plugins: [
        new ReadmeWebpackPlugin('yes!')
    ]
};