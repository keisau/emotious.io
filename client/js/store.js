import { createStore, applyMiddleware, compose } from "redux"
import { reduxReactRouter } from "redux-router"
import { createHistory } from "history"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducer from "./reducers"
const middleware = process.env.NODE_ENV === "production" ?
  [ thunk ] :
  [ thunk, logger() ]

export const store = compose (
	applyMiddleware (...middleware),
	reduxReactRouter ({
		createHistory
	})
) (createStore) (reducer)
