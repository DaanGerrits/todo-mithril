const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config');
const Uglify = require('uglifyjs-webpack-plugin');

const uglify = new Uglify({
    sourceMap: true
});

module.exports = merge(common, {
    devtool: "source-map",
    mode: "production",
    plugins: [uglify]
});