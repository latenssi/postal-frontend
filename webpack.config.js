'use strict';

var APP_DIR = __dirname + '/app';
var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: APP_DIR,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  },
  module: {
   loaders: [
     {
       test: /\.html$/,
       loader: 'file?name=templates/[name]-[hash:6].html'
     },
     {
       test: /\.css$/,
       loader: "style!css"
      },
     {
       test: /\.scss$/,
       loader: 'style!css!sass'
     },
     {
       test: /\.js$/,
       exclude: /(node_modules)/,
       loader: "ng-annotate"
      },
   ]
 },
 plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    pkg: pkg,
    template: path.join(APP_DIR, 'index.html')
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  ]
}
