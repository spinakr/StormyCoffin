var webpack = require('webpack');
var webpackConfigBase = require('./webpack.config.base');
var babelLoader = require('./loaders/babel');
var merge = require('webpack-merge');

module.exports = merge.strategy({
  entry: 'prepend',
  'module.loaders': 'prepend'
})(webpackConfigBase, {
  output: {
    publicPath: 'app/dist/'
  },
  module: {
      loaders: [
        babelLoader
      ]
    },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
