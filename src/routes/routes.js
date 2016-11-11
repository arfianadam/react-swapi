import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppContainer from '../components/smart/AppContainer'

module.exports = (
	<Route>
		<Route path='/' component={ AppContainer } />
	</Route>
)