import React from 'react'
import Waypoint from 'react-waypoint'
import Api from './api/Api'
import Panel from './Panel'
import './less/Detail.less'

export default React.createClass({

  getInitialState() {
    return{
      data: [],
      page: 1,
      isLoading: false
    }
  },

  insertItems(content) {
    var results =  content.results
    var data = this.state.data
    var currentPage = this.state.page
    data = data.concat(results)
    currentPage++
    this.setState({
      data: data,
      page: currentPage,
      isLoading: false
    })
    console.log(this.state.data)
  },

  loadItems() {
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true
      })
      const { category } = this.props.params
      var page = this.state.page
      var content = Api.getList(category, page, this.insertItems)
    } else { console.log('Still loading!') }
  },

  waypoint() {
    if (!this.state.isLoading) {
      return (
        <Waypoint onEnter={this.loadItems} />
      )
    }
  },

  render() {
    var caps = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const { category } = this.props.params

    var data = this.state.data
    var renderItems = data.map(function(item, index) {
      return <Panel data={item} key={index} />
    })

    return (
      <div className="container">
        <div className="title">
          <h1 className="text-center">{caps(category)}</h1>
        </div>
        <table className="table">
          <tbody>
          {renderItems}
          </tbody>
        </table>
        {this.waypoint()}
      </div>
    )
  }
})