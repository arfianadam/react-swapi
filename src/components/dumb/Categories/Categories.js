import React from 'react'
import styles from './Categories.scss'

import CategoriesList from '../CategoriesList'

class Categories extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const categories = this.props.data.map((item, i) => {
			return (
				<CategoriesList key={ i } slug={ item }/>
			)
		})

		return (
			<div className={ styles.Categories }>
				{ categories }
			</div>
		)
	}
}

export default Categories