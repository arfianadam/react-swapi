import { Route, IndexRoute } from 'react-router'

import AppContainer from '../components/smart/AppContainer'
import CategoriesContainer from '../components/smart/CategoriesContainer'
import CategoryContainer from '../components/smart/CategoryContainer'
import DetailContainer from '../components/smart/DetailContainer'

module.exports = (
	<Route>
		<Route path='/' component={ AppContainer }>
			<IndexRoute component={ CategoriesContainer }/>
			<Route path="/categories/:category" component={ CategoryContainer }/>
			<Route path="/categories/:category/:id" component={ DetailContainer }/>
		</Route>
	</Route>
)