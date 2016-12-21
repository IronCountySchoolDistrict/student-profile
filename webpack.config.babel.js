import path from 'path';

export default {
  devtool : 'source-map',
  entry : {
    bundle: './src/scripts/student-profile/js/react-index'
  },
  output : {
    path: path.join(__dirname, 'dist/src/scripts/student-profile/js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
