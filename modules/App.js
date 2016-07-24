import React from 'react'
import Header from './Header'
import './main.less'

export default React.createClass({
  render() {
    return (
      <div id="appcontainer">
        <Header/>
        {this.props.children}
      </div>
    )
  }
})
