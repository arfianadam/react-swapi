import React from 'react'
import { Link } from 'react-router'
import styles from './CategoryList.scss'

class CategoryList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var name = ''
		if (this.props.data.title) {
			name = this.props.data.title
		} else {
			name = this.props.data.name
		}
		var id = this.props.data.url.substring(20)
		return (
			<tr>
				<td>
					<Link to={'/categories/' + id}>{ name }</Link>
				</td>
			</tr>
		)
	}
}

export default CategoryList