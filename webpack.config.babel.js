/* global process */

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { argv } from 'yargs';

const TARGET = process.env.npm_lifecycle_event;

const common = {
  entry: {
    bundle: [
      './src/scripts/student-profile/js/react-index'
    ],
    vendor: [
      'bootstrap', 'isomorphic-fetch', 'urijs', 'jquery', 'he', 'address-format', 'react', 'react-dom', 'react-router'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/src/scripts/student-profile'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', 
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};

let config;
if (TARGET === 'build:dev') {
  config = WebpackMerge.strategy({
    entry: 'prepend',
    'module.loaders': 'prepend'
  })(common, {
    output: {
      publicPath: 'https://localhost:8080/scripts/student-profile'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new HtmlWebpackPlugin({
      //   host: 'https://localhost:8080',
      //   psHost: 'https://pstest.irondistrict.org',
      //   target: 'dev',
      //   template: 'src/scripts/student-profile/html/index.ejs'
      // })
    ],
    entry: {
      bundle: [
        'webpack-dev-server/client?https://localhost:8080/',
        'webpack/hot/only-dev-server'
      ]
    }
  });
} else {
  config = WebpackMerge(common, {
    devtool: 'source-map',
    output: {
      publicPath: 'https://pstest.irondistrict.org/scripts/student-profile'
    },
    // plugins: [
      // new webpack.optimize.UglifyJsPlugin()
      // new HtmlWebpackPlugin({
      //   host: '/scripts/student-profile',
      //   psHost: 'https://pstest2.irondistrict.org',
      //   target: 'prod',
      //   template: 'src/scripts/student-profile/html/index.ejs'
      // })
    // ]
  });
}

export default config;