import { Route, IndexRoute } from 'react-router'

import AppContainer from '../components/smart/AppContainer'
import CategoriesContainer from '../components/smart/CategoriesContainer'

module.exports = (
	<Route>
		<Route path='/' component={ AppContainer }>
			<IndexRoute component={ CategoriesContainer }/>
		</Route>
	</Route>
)