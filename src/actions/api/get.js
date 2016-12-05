import request from 'superagent'

const url = 'http://swapi.co/api/'

export default {

	getCategory(category, page) {
		return new Promise((resolve, reject) => {
			request
				.get(url + category + '/?page=' + page)
				.end((err, res) => {
					if (err) {
						reject(err)
					} else {
						resolve(res.body)
					}
				})
		})
	}

}