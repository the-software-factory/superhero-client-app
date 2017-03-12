
'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');

/**
 * Webpack configuration for production environment
 */
module.exports = webpackMerge(commonConfig('production'), {
  // Defines the source map level
  devtool: 'source-map',

  // Specifies the output. It introduces hashes so that
  // we ensure the browser will not use cache
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    // Stops everything if an error occurs.
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/angular/angular/issues/10618
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      sourceMap: true
    }),

    // Extract and bundle the CSS
    new ExtractTextPlugin('[name].[hash].css')
  ]
});
