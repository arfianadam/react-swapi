const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const combineLoaders = require('webpack-combine-loaders')
// const env = require('dotenv').config()
const validate = require('webpack-validator')

const srcPath = path.join(__dirname, 'src/')
const publicPath = path.join(__dirname, 'public/')

const main = {
	entry: {
		index: path.resolve(__dirname, 'server.js'),
	},
	output: {
		filename: 'server.bundle.js'
	},
	target: 'node',
	node: {
		__filename: true,
		__dirname: true
	},
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),
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
					name: '[hash:base64:5].[ext]',
					emitFile: false
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.ProvidePlugin({
			'React': 'react',
			'Promise': 'promise-polyfill',
			'_': 'lodash',
		}),
		new ExtractTextPlugin('public/style.css')
	]
}

const config = main

module.exports = validate(config)