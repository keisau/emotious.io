import types from "../constants/rootConstants"

export function setLoaded (loaded) {
	return dispatch => {
		dispatch ({
			type: types.ROOT_SET_LOADED,
			loaded: loaded
		})
	}
}
