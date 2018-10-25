
const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode:"development",
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true
            //             }
            //         },
            //     ]
            // },
            // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({//该插件功能是打包js入口文件时，以该html作为模板，将打包后的js插入该模板，将html文件输出到输出目录中
            template:'./index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
};