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
				{/* Your code here */}
			</div>
		)
	}
}

export default AppContainer
