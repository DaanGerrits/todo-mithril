const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        port: 3001,
        host: 'localhost',
        publicPath: '/',
        contentBase: './src',
        historyApiFallback: true
    }
});