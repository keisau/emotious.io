import React from "react"
import { Route, IndexRoute } from "react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ReduxRouter, pushState } from "redux-router"

import IndexContainer, { NotFoundContainer, RootContainer } from "./containers"
import history from "./history"

import * as rootActions from "./actions/rootActions"

import { store } from "./store"

const App = React.createClass ({
	initialize (nextState, replaceState) {
	},
	render () {
		return (
			<ReduxRouter history={history} createElement={this.createElement} >
				<Route path="/" component={RootContainer} onEnter={this.initialize}>
					<IndexRoute component={IndexContainer} />
					<Route path="*" component={NotFoundContainer} />
				</Route>
			</ReduxRouter>
		)
	}
})

export default connect (
	state => ({}),
	dispatch => ({
		pushState,
		actions: bindActionCreators (rootActions, dispatch)
	})
) (App)
