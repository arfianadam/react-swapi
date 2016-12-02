import React from 'react'
import styles from './Header.scss'

import NavLink from '../NavLink'

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={ styles.Header }>
				<h1>React Star Wars API</h1>
					<ul role="nav">
						<li className={ styles.button }>
							<NavLink to="/" onlyActiveOnIndex>Home</NavLink>
						</li>
						<li className={ styles.button }>
							<NavLink to="/about">About</NavLink>
						</li>
					</ul>
			</div>
		)
	}
}

export default Header