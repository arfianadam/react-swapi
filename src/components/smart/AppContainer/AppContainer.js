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
				<h1>React SWAPI</h1>
			</div>
		)
	}
}

export default AppContainer