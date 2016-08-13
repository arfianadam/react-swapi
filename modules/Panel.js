import React from 'react'
import {
    Link
} from 'react-router'

export default React.createClass({
    render() {
        if (this.props.data.title) {
            var name = this.props.data.title
        } else {
            var name = this.props.data.name
        }
        var id = this.props.data.url.substring(20)
        return (
            <tr><td><Link to={'/categories/' + id}>{name}</Link></td></tr>
        )
    }
})