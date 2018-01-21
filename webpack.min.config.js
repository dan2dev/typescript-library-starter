var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");
var config = require("./webpack.config.js");

config.output.filename = "[name].min.js";
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
}));

module.exports = config;