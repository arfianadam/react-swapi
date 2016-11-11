import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
    <Router routes={ routes } history={ history } />
  </Provider>,
  document.getElementById('app')
)