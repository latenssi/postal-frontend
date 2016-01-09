'use strict';

var SRC_DIR = __dirname + '/app';
var DIST_DIR = __dirname + '/dist';
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: SRC_DIR,
  entry: './core/bootstrap.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle-[hash:6].js'
  },
  resolve: {
    root: SRC_DIR
  },
  module: {
   loaders: [
     {
       test: /\.html/,
       loader: 'raw'
     },
     {
       test: /\.json/,
       loader: 'json'
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
     }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(SRC_DIR, 'index.html'),
      inject: 'body'
    })
  ]
}
