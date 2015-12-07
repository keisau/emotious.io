import { combineReducers } from "redux"
import { routerStateReducer as router } from "redux-router"

import root from "./root"

export default combineReducers({
	root,
	router
})
