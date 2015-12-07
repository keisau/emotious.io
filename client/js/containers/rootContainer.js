require ("../../styles/stylesheet.scss")

import React, { PropTypes } from "react"
import { connect } from "react-redux"
import Loader from "react-loader"

const SpinnerLoader = React.createClass ({
	propTypes: {
		loaded: PropTypes.bool
	},
	render () {
		console.log ("SpinnerLoader", this.props)
		const { loaded } = this.props
		return loaded ? (<div id="spinnerLoader" className="hide"></div>) : (
			<div id="spinnerLoader">
				<Loader className="spinner" top="50%" left="50%" scale={1} hwaccel={true} loaded={loaded} />
			</div>
		)
	}
})

const SpinnerLoaderContainer = connect (state => ({ loaded: state.root.loaded })) (SpinnerLoader)

const Root = React.createClass ({
	render () {
		console.log ("Root", this)
		return (
			<div id="rootContainer">
				<SpinnerLoaderContainer />
				{this.props.children}
			</div>
		)
	}
})
export const RootContainer = connect (state => state) (Root)
