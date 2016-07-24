import React from 'react'
import request from 'superagent'

export default React.createClass({
  render() {
    const { category, id } = this.props.params
    var content = {}
  	request
      .get('http://swapi.co/api/' + category + '/' + id )
      .end(function(err, res) {
        // log the error
        if (err) {
          console.log(err);
        }
        content = res.body
        console.log(content)
    });
    return (
      <div className="container">
        <h2>{category} / {id}</h2>
      </div>
    )
  }
})
