import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div className="container">
    		<h3 className="text-center">About This Project</h3>
    		<p>This is a fun project made by me, Arfian Adam. I used Star Wars API collection at <a href="http://swapi.co">Swapi.co</a>. This project is built on React without any Redux implementation like Flux to keep it simple and easy to understand. You can find the source code at <a href="https://github.com/arfianadam/react-swapi">Github</a>. Feel free to make suggestions.
    		</p>
    		<p>Contact me at <a href="mailto:contact@arfianadam.com">contact@arfianadam.com</a></p>
    	</div>
    )
  }
})
