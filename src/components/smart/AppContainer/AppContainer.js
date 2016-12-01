import React from 'react'
import styles from './AppContainer.scss'

class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'AppContainer'
	}

	render() {
		return (
			<div className={ styles.AppContainer }>
				Hello!!
			</div>
		)
	}
}

export default AppContainer
