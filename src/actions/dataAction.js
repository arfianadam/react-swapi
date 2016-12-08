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
				let results = response
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

export function getItem(category, id) {
	return (dispatch) => {
		dispatch({ type: 'LOADING_START', payload: category })
		get.getItem(category, id)
			.then((response) => {
				let results = response
				results.id = parseInt(id)
				const data = {
					category: category,
					results: results
				}
				dispatch({ type: 'INSERT_DATA_SINGLE', payload: data })
				dispatch({ type: 'LOADING_END', payload: category })
			}, (err) => {
				
			})
	}
}