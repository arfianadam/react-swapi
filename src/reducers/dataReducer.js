const categories = [
	'films',
	'people',
	'planets',
	'species',
	'starships',
	'vehicles'
]

function toObject(array) {
	let temp = {}
	array.map((item, i) => {
		temp[item] = {
			page: 1,
			isLoading: false,
			fetched: false,
			data: []
		}
	})
	return temp
}

export default function reducer(state={
	isLoading: false,
	data: toObject(categories)
}, action) {
	switch (action.type) {
		case 'LOADING_START': {
			const category = action.payload
			const data = {...state.data}
			data[category].isLoading = true
			return {
				...state,
				data: data
			}
		}

		case 'LOADING_END': {
			const category = action.payload
			const data = {...state.data}
			data[category].isLoading = false
			return {
				...state,
				data: data
			}
		}

		case 'FETCHED_ALL': {
			const category = action.payload
			const data = {...state.data}
			data[category].fetched = true
			return {
				...state,
				data: data
			}
		}

		case 'INSERT_DATA': {
			const category = action.payload.category
			const results = action.payload.results
			let data = {...state.data}
			const currentData = data[category].data
			data[category].data = [...currentData, ...results]
			data[category].page++
			return {
				...state,
				data: data
			}
		}
	}

	return state
}