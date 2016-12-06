import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './DetailContainer.scss'

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
		if (isFetched) {
			this.setState({
				data: dataDetail[0],
				category: category
			})
		}
	}

	render() {
		return (
			<div className={ styles.DetailContainer }>
				<Detail data={ this.state.data } category={ this.state.category }/>
			</div>
		)
	}
}

export default DetailContainer