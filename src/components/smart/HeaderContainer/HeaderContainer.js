import React from 'react'
import styles from './HeaderContainer.scss'

import Header from '../../dumb/Header'

class HeaderContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={ styles.HeaderContainer }>
				<Header/>
			</div>
		)
	}
}

export default HeaderContainer