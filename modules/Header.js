import React from 'react'
import NavLink from './NavLink'
import './less/Header.less'

export default React.createClass({
    render() {
        return (
            <div className="header">
				<h1>React Star Wars API</h1>
				<ul role="nav">
					<li className="btn btn-default"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
					<li className="btn btn-default"><NavLink to="/about">About</NavLink></li>
				</ul>
			</div>
        )
    }
})