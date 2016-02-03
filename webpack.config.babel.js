import webpack from 'webpack';

module.exports = {
  entry: {
   app: './src/web_root/scripts/student-profile/js/app.js',
   vendor: ['bootstrap/dist/css/bootstrap.css', 'bootstrap/dist/js/bootstrap.js'] 
  },
  output: {
    path: './dist/web_root/scripts/student-profile',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  devtool: 'source-map'
};