'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var SRC_DIR = __dirname + '/app';
var DIST_DIR = __dirname + '/dist';

module.exports = {
  context: SRC_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    root: SRC_DIR
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'jshint-loader'}
    ],
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.css$/, loaders: ['style', 'css']},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'ng-annotate'}
   ]
  },
  externals: {
    'angular': true,
    'angular-animate': '"ngAnimate"',
    'angular-aria': '"ngAria"',
    'angular-cookies': '"ngCookies"',
    'angular-messages': '"ngMessages"',
    'angular-resource': '"ngResource"',
    'angular-route': '"ngRoute"',
    'angular-sanitize': '"ngSanitize"',
    'angular-material': '"ngMaterial"'
  }
}
