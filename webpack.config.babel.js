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
    vendor: ['bootstrap', 'isomorphic-fetch', 'urijs', 'jquery', 'he', 'address-format']
  },
  output: {
    path: path.join(__dirname, 'dist/src/scripts/student-profile'),
    filename: 'bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel?presets[]=es2015'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
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
      //   psHost: 'https://pstest2.irondistrict.org',
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
      publicPath: 'https://pstest2.irondistrict.org/scripts/student-profile'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      // new HtmlWebpackPlugin({
      //   host: '/scripts/student-profile',
      //   psHost: 'https://pstest2.irondistrict.org',
      //   target: 'prod',
      //   template: 'src/scripts/student-profile/html/index.ejs'
      // })
    ]
  });
}

export default config;