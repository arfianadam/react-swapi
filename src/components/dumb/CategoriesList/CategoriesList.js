import React from 'react'
import { Link } from 'react-router'
import styles from './CategoriesList.scss'

import '../../../polyfill/capitalizeFirstLetter'

class CategoriesList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const title = this.props.slug.capitalizeFirstLetter()
		const style = {
			backgroundImage: ''
		}
		return (
			<Link to={ '/categories/' + this.props.slug }>
				<div className={ styles.CategoriesList + ' ' + styles[this.props.slug] }>
					<h2>{ title }</h2>
				</div>
			</Link>
		)
	}
}

export default CategoriesList