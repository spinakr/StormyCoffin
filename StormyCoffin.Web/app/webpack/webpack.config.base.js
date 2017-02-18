var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    devtool: 'source-map',
    output: {
        path: "dist/",
        filename: 'app-bundle.js',
    },
    module: {
      loaders: [
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=fonts/[name].[ext]'
        },
        {
            test: /\.(png)$/,
            loader: 'file?name=images/[name].[ext]'
        },
      ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
};
