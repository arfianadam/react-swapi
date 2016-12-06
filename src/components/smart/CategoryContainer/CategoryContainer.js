import React from 'react'
import Waypoint from 'react-waypoint'
import { connect } from 'react-redux'
import _ from 'lodash'
import fp from 'lodash/fp'
import styles from './CategoryContainer.scss'

import '../../../polyfill/capitalizeFirstLetter'

import { getCategory } from '../../../actions/dataAction'

import CategoryList from '../../dumb/CategoryList'
import LoadingIcon from '../../dumb/LoadingIcon'

@connect((store) => {
	return {
		isLoading: store.data.isLoading,
		data: store.data.data
	}
})

class CategoryContainer extends React.Component {
	constructor(props) {
		super(props)
		this._getItems = this._getItems.bind(this)
	}

	_getItems() {
		const { category } = this.props.params
		const page = this.props.data[category].page
		this.props.dispatch(getCategory(category, page))
	}

	_waypoint() {
		const isLoading = this.props.data[this.props.params.category].isLoading
		const fetched = this.props.data[this.props.params.category].fetched
		if (!isLoading && !fetched) {
			return <Waypoint onEnter={ this._getItems }/>
		}
	}

	render() {
		const isLoading = this.props.data[this.props.params.category].isLoading
		const fetched = this.props.data[this.props.params.category].fetched
		const data = this.props.data[this.props.params.category].data
		const { category } = this.props.params
		const list = data.map((item, i) => {
			return <CategoryList data={ item } key={ i }/>
		})
		const listNumber = () => {
			return <h6>{ data.length } { category } were fetched.</h6>
		}
		return (
			<div className={ styles.CategoryContainer }>
				<h1>{ category.capitalizeFirstLetter() }</h1>
				<table className={ styles.table }>
					<tbody>
						{ list }
					</tbody>
				</table>
				{ isLoading && !fetched ? <LoadingIcon/> : null }
				{ fetched ? listNumber() : null }
				{ this._waypoint() }
			</div>
		)
	}
}

export default CategoryContainer