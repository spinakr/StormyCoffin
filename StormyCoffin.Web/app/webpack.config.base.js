var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'app-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|dist|.tmp)/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react'],
            },
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    ]
};
