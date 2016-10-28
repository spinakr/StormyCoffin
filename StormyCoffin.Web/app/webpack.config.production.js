var webpack = require('webpack');
var config = require('./webpack.config.base');
var merge = require('webpack-merge');

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
});
