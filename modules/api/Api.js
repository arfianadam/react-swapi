import request from 'superagent'

export default {

	getList(category, page, callback) {
		request
			.get('http://swapi.co/api/' + category + '/?page=' + page )
			.end(function(err, res) {
			// log the error
			if (err) {
			  console.log(err);
			} else {
				var content = res.body
				callback(content)
			}
		});
	},

	getDetail(category, id, callback) {
		request
			.get('http://swapi.co/api/' + category + '/' + id )
			.end(function(err, res) {
			// log the error
			if (err) {
			  console.log(err);
			} else {
				var content = res.body
				callback(content)
			}
		});
	}
}