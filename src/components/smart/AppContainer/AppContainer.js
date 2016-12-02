import React from 'react'
import Helmet from 'react-helmet'
import styles from './AppContainer.scss'

import HeaderContainer from '../HeaderContainer'

class AppContainer extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'AppContainer'
	}

	render() {
		return (
			<div className={ styles.AppContainer }>
				<Helmet
					defaultTitle='React SWAPI'
					titleTemplate='%s - React SWAPI'
				/>
				<HeaderContainer/>
				{ this.props.children }
			</div>
		)
	}
}

export default AppContainer