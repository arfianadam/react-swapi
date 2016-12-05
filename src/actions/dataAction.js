import get from './api/get'

function getId(string, category) {
	const url = 'http://swapi.co/api/'
	let newString = string.replace(url + category + '/', '')
	newString = newString.replace('/', '')
	newString = parseInt(newString)
	return newString
}

export function getCategory(category, page) {
	return (dispatch) => {
		dispatch({ type: 'LOADING_START', payload: category })
		get.getCategory(category, page)
			.then((response) => {
				let results = response.results
				results.map((item, i) => {
					const id = getId(item.url, category)
					item.id = id
				})
				const data = {
					category: category,
					results: results
				}
				dispatch({ type: 'INSERT_DATA', payload: data })
				dispatch({ type: 'LOADING_END', payload: category })
			}, (err) => {
				dispatch({ type: 'FETCHED_ALL', payload: category })
			})
	}
}