import React from 'react'
import { Link } from 'react-router'
import styles from './Detail.scss'

import '../../../polyfill/capitalizeFirstLetter'

class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={ styles.Detail }>
				<div className={ styles.header }>
					<h1>{ this.props.data.name }</h1>
					<h5>
						<Link to={ '/categories/' + this.props.category }>
							<label>
								{ this.props.category.capitalizeFirstLetter() }
							</label>
						</Link>
					</h5>
				</div>
			</div>
		)
	}
}

export default Detail