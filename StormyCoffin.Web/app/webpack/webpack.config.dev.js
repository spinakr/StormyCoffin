var webpack = require('webpack');
var path = require('path');
var webpackConfigBase = require('./webpack.config.base');
var babelLoaderHot = require('./loaders/babel.hot');
var merge = require('webpack-merge');

module.exports = merge.strategy({
  entry: 'prepend',
  'module.loaders': 'prepend'
})(webpackConfigBase, {
  entry: ['react-hot-loader/patch'],
  output: {
    path: path.resolve("./dist/"),
    publicPath: 'http://localhost:5501/app/dist/'
  },
  module: {
      loaders: [
        babelLoaderHot
      ]
    },
  devServer: {
    hot: true,
    inline: true,
    port: 5501,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
