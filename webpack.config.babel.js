import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  devtool: 'source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './src/scripts/student-profile/js/react-index'
    ],
    vendor: ['bootstrap', 'isomorphic-fetch', 'react', 'react-dom', 'react-router', 'urijs', 'jquery', 'he', 'address-format']
  },
  output: {
    path: path.join(__dirname, 'dist/src/scripts/student-profile'),
    filename: 'bundle.js',
    publicPath: '/scripts/student-profile'
  },
  module: {
    loaders: [
      {
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
    new webpack.HotModuleReplacementPlugin(),
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
