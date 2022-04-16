const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        './js/shouye': __dirname + '/src/js/shouye.js',
        './js/juqery.min': __dirname + '/src/js/jquery.min.js'
    },
    output: {
        path: resolve(__dirname, "build"),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [{
                //处理css资源
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                //处理img资源
                test: /\.(jpg|png|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            /* {
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            } */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/first_page.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode: 'development',
    devServer: {
        static: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    }
}