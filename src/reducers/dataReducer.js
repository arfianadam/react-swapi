export default function reducer(state={
	isLoading: false,
	data: {
		films: [],
		people: [],
		planets: [],
		species: [],
		starships: [],
		vehicles: []
	}
}, action) {
	switch (action.type) {
		case 'FETCH_DATA': {
			return {
				...state,
				isLoading: true
			}
		}

		case 'FETCH_DATA_FULFILLED': {
			return {
				...state,
				isLoading: false,
				data: action.payload
			}
		}
	}

	return state
}