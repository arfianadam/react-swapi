const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const combineLoaders = require('webpack-combine-loaders')
const env = require('dotenv').config()
const validate = require('webpack-validator')

const srcPath = path.join(__dirname, 'src/')
const publicPath = path.join(__dirname, 'public/')

const main = {
	entry: {
		index: srcPath + 'index.js'
	},
	output: {
		path: publicPath,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0'],
					plugins: ['transform-decorators-legacy','syntax-decorators']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					combineLoaders([
						{
							loader: 'css-loader',
							query: {
								minimize: true,
								modules: true,
								localIdentName: '[hash:base64:5]'
							}
						},
						{
							loader: 'sass-loader'
						},
						{
							loader: 'autoprefixer-loader',
							query: {
								browsers: 'last 2 versions'
							}
						}
					])
				)
			},
			{
				test: /\.jpg$/,
				loader: 'file-loader',
				query: {
					name: '[hash:base64:5].[ext]'
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			'React': 'react',
			'Promise': 'promise-polyfill',
			'_': 'lodash',
		}),
		new ExtractTextPlugin('style.css')
	]
}

const config = main

module.exports = validate(config)