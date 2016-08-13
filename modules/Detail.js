import React from 'react'
import {
    Link
} from 'react-router'
import Api from './api/Api'
import './less/Detail.less'

export default React.createClass({

    getInitialState() {
        return {
            content: {},
            category: ''
        }
    },

    componentWillMount() {
        const {
            category,
            id
        } = this.props.params
        Api.getDetail(category, id, this.setContent)
    },

    reloadData(category, id) {
        Api.getDetail(category, id, this.setContent)
    },

    setContent(data) {
        const {
            category
        } = this.props.params
        this.setState({
            content: data,
            category: category
        })
    },

    render() {
        var self = this
        var data = this.state.content
        console.log(data)
        if (data.title) {
            var name = data.title
        } else {
            var name = data.name
        }
        var caps = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        var links = [
            'films',
            'characters',
            'people',
            'pilots',
            'planets',
            'species',
            'homeworld',
            'residents',
            'starships',
            'vehicles',
            'url'
        ]

        var getQuery = function(string) {
            var link = string.substring(20)
            return link
        }
        var renderContent = Object.keys(data).map(function(key, index) {
            if ($.inArray(key, links) > -1) {
                var convertToLink = function(string, index) {
                    var link = getQuery(string)
                    var slashLocation = link.indexOf("/")
                    var category = link.slice(0, slashLocation)
                    var lastSlashLocation = link.substring(slashLocation + 1).length
                    var id = link.substring(slashLocation + 1).slice(0, lastSlashLocation - 1)
                    var subName = ''
                    return (
                        <li key={index}><Link to={ '/categories/' + link } onClick={ () => this.reloadData(category, id) }>{category + ' - ' + id}</Link></li>
                    )
                }

                if ($.isArray(data[key])) {
                    var value = data[key].map(function(content, index) {

                        // To be implemented later to fetch lists' appropriate name
                        // var setName = function(subData) {
                        // 	console.log(subData.name)
                        // 	if (subData.title) {
                        //   		var subName = subData.title
                        //   	} else {
                        //   		var subName = subData.name
                        //   	}
                        // }
                        // Api.getDetail(category, id, setName)
                        var link = convertToLink(content, index)
                        return link
                    })
                } else {
                    var value = convertToLink(data[key])
                }
            } else {
                var value = data[key]
            }
            return (
                <tr key={index}>
					<td><strong>{caps(key).replace('_', ' ')}</strong></td>
					<td>
						<ul>{value}</ul>
					</td>
				</tr>
            )
        })
        return (
            <div className="container">
				<div className="title">
					<h1 className="text-center">{name}</h1>
					<h3 className="text-center">{caps(this.state.category)}</h3>
				</div>
				<table className="table">
					<tbody>
					{renderContent}
					</tbody>
				</table>
			</div>
        )
    }
})