import React from "react"
import { Route, IndexRoute } from "react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ReduxRouter, pushState } from "redux-router"

import IndexContainer, { NotFoundContainer, RootContainer } from "./containers"
import history from "./history"

import { setLoaded } from "./actions/rootActions"

const App = React.createClass ({
	initialize (nextState, replaceState) {
		this.props.setLoaded (true)
	},
	render () {
		console.log (this)
		return (
			<ReduxRouter history={history} >
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
		setLoaded: bindActionCreators (setLoaded, dispatch)
	})
) (App)
