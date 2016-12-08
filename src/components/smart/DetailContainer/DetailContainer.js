import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './DetailContainer.scss'

import { getItem } from '../../../actions/dataAction'

import Detail from '../../dumb/Detail'

@connect((store) => {
	return {
		data: store.data.data,
		isLoading: store.data.isLoading
	}
})

class DetailContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {},
			category: ''
		}
	}

	componentDidMount() {
		const { category, id } = this.props.params
		const data = this.props.data[category].data
		const dataDetail = _.filter(data, { id: parseInt(id) })
		const isFetched = dataDetail.length > 0 ? true : false
		console.log(dataDetail)
		console.log(isFetched)
		if (!isFetched) {
			this.props.dispatch(getItem(category, id))
		}
	}

	render() {
		const { category, id } = this.props.params
		const data = this.props.data[category].data
		const dataDetail = _.filter(data, { id: parseInt(id) })
		return (
			<div className={ styles.DetailContainer }>
				<Detail data={ dataDetail[0] } category={ category }/>
			</div>
		)
	}
}

export default DetailContainer