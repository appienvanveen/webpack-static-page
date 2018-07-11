const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './public/app.js',
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        },{
            test: /\.(mov|mp4)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        }]
    }
};