import React from 'react'
import { Link } from 'react-router'
import styles from './Detail.scss'

import '../../../polyfill/capitalizeFirstLetter'

import LoadingIcon from '../LoadingIcon'

class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const isLoaded = this.props.data ? true : false
		const content = () => {
			return (
			<div>
				<h1>{ this.props.data.name }</h1>
				<h5>
					<Link to={ '/categories/' + this.props.category }>
						<label>
							{ this.props.category.capitalizeFirstLetter() }
						</label>
					</Link>
				</h5>
			</div>
			)
		}
		return (
			<div className={ styles.Detail }>
				<div className={ styles.header }>
					{ isLoaded ? content() : <LoadingIcon/> }
				</div>
			</div>
		)
	}
}

export default Detail