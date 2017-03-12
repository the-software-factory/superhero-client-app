
'use strict';

const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack common configuration that shares common properties
 * that are environment agnostic
 */
module.exports = (environment) => {

  environment = environment || 'production';

  // Loads the .env.* where * is the needed environment.
  dotenv.config({ path: `./.env.${environment}` });

  return {
    entry: {
      app: './src/main.ts'
    },

    resolve: {
      extensions: ['.js', '.ts', '.json']
    },

    module: {
      rules: [

        // Transpiles all Typescript file to Js
        {
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader',
            'angular2-template-loader'
          ]
        },

        // Embed each HTML reference
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimise: true
              }
            }
          ]
        },

        // Embed each file specified in test
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash].[ext]'
              }
            }
          ]
        },

        // Compiles specific SASS into CSS by Js and injecting it inline
        {
          test: /\.scss$/,
          exclude: [ /\.global\.scss$/ ],
          use: [
            'raw-loader',
            'sass-loader'
          ]
        },

        // Compiles global SASS into CSS by extracting reference from Js
        {
          test: /\.global\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'resolve-url-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        }
      ]
    },

    // Imports Webpack needed plugins
    plugins: [
      // Creates the environment variables.
      new webpack.DefinePlugin({
        application: {
          env: {
            ENV: JSON.stringify(environment),
            API_URL: JSON.stringify(process.env.API_URL),
          }
        }
      }),

      // Creates the needed chunks based on entry points
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
        },
      }),

      // Updates the index template to include chunks
      new HtmlWebpackPlugin({
        template: './www/index.html'
      }),

      // Angular 2 workaround to disable some warnings.
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.resolve(__dirname, 'doesnotexist/')
      )
    ]
  };
};
