
'use strict';

const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');

/**
 * Webpack configuration for development environment
 */
module.exports = webpackMerge(commonConfig('development'), {

  // Defines the source map level
  devtool: 'cheap-module-eval-source-map',

  // Defines the output and the built-in server establishment-address
  output: {
    path: path.resolve('./www'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // Extracts the CSS
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
