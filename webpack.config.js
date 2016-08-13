var webpack = require('webpack')

const AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
    '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
    '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

module.exports = {
    entry: './index.js',

    output: {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!' + AUTOPREFIXER_LOADER
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!' + AUTOPREFIXER_LOADER +
                '!less-loader'
        }, {
            test: /\.jpg/,
            loader: 'file-loader'
        }]
    }
}