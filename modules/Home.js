import React from 'react'
import {
    Link
} from 'react-router'
import './less/Home.less'

export default React.createClass({
    render() {
        return (
            <div className="container-fluid">
			<div className="row">
				<Link to="/categories/films"><div className="col-md-6 section films"><h2>Films</h2></div></Link>
				<Link to="/categories/people"><div className="col-md-6 section people"><h2>People</h2></div></Link>
				<Link to="/categories/planets"><div className="col-md-6 section planets"><h2>Planets</h2></div></Link>
				<Link to="/categories/species"><div className="col-md-6 section species"><h2>Species</h2></div></Link>
				<Link to="/categories/starships"><div className="col-md-6 section starships"><h2>Starships</h2></div></Link>
				<Link to="/categories/vehicles"><div className="col-md-6 section vehicles"><h2>Vehicles</h2></div></Link>
			</div>
		</div>
        )
    }
})