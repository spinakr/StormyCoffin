module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|dist|.tmp)/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-object-rest-spread', 'react-hot-loader/babel'],
  },
};
