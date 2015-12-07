import types from "../constants/rootConstants"

const initialState = {
	loaded: false,
}

function setLoaded (state = initialState.auth, action) {
	if (action.type === types.ROOT_SET_LOADED) {
		return action.loaded
	} else {
		return state
	}
}

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return {
				loaded: setLoaded (state.loaded, action)
			}
	}
}
