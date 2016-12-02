import React from 'react'
import { Link } from 'react-router'
import styles from './NavLink.scss'

class NavLink extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Link {...this.props} activeClassName="active"/>
		)
	}
}

export default NavLink