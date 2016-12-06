import React from 'react'
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
						<label>
							{ this.props.category.capitalizeFirstLetter() }
						</label>
					</h5>
				</div>
			</div>
		)
	}
}

export default Detail