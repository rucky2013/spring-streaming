'use strict';

let
  context = `${__dirname}/../..`,
  mainDir = `${context}/src/main`

module.exports = {
  context,
  devtool: 'cheap-inline-module-source-map',
  entry: {
    app: `${mainDir}/www/main`,
    admin: `${mainDir}/www/admin/main`
  },
  output: {
    path: `${mainDir}/resources/public/`,
    filename: '[name].js'
    // used to generate URLs to e.g. images
    //publicPath: 'http://npm mycdn.com/'
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/},
      // use '!' to chain loaders
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&mimetype=image/svg+xml'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10240&mimetype=application/octet-stream'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5120'},
      // inline base64 URLs for < 5k images, direct URLs for the rest
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=5120'}
    ]
  },
  plugins: []
}
