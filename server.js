import express from 'express'
import path from 'path'
import compression from 'compression'

import { match, RouterContext } from 'react-router'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

import routes from './src/routes'

import { Provider } from 'react-redux'
import store from './store'

const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, 'public'), {index: false}))

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		if (err) {
			res.status(500).send(err.message)
		} else if (redirect) {
			res.redirect(redirect.pathname + redirect.search)
		} else if (props) {
			// hey we made it!
			const appHtml = renderToString(<Provider store={store}><RouterContext {...props}/></Provider>)
			let Head = Helmet.rewind()
			res.send(renderHTML(Head, appHtml))
		} else {
			res.status(404).send('Not Found')
		}
	})
})

const renderHTML = (Head, appHtml) => {
	return `
		<!doctype html public="storage">
		<html ${Head.htmlAttributes.toString()}>
		<meta charset=utf-8/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="author" content="Arfian Adam">
		<link rel="shortcut icon" href="/assets/images/favicon.ico"> 
		<link rel="apple-itouch-icon" href="/assets/images/favicon.png">
		<head>
			${Head.title.toString()}
			${Head.meta.toString()}
			${Head.link.toString()}

			<link rel="stylesheet" href=/styles.css>
		</head>
		<body>
			<div id=app>${appHtml}</div>
			<script async src="/index.js"></script>
		</body>
	`
}