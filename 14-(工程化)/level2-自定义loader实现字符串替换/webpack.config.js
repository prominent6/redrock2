const { reslove } = require('path')
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    //loader路径
    resolveLoader: {
        modules: ['node_modules', './loaders'],
    },
    module: {
        rules: [{
            test: /.js$/,
            use: {
                loader: 'replace-loader',
                options: {
                    name: 'XIAOSU',
                },
            }
        }, ],
    },
    mode: "production",
};