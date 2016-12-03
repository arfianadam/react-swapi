import React from 'react'
import styles from './CategoriesContainer.scss'

import Categories from '../../dumb/Categories'

class CategoriesContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				'films',
				'people',
				'planets',
				'species',
				'starships',
				'vehicles'
			]
		}
	}

	render() {
		return (
			<div className={ styles.CategoriesContainer }>
				<Categories data={ this.state.categories }/>
			</div>
		)
	}
}

export default CategoriesContainer