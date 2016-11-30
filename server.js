import express from 'express'
import path from 'path'

import { match, RouterContext } from 'react-router'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

import routes from './src/routes'

import { Provider } from 'react-redux'
import store from './store'