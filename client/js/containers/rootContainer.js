import React from "react"
import { connect } from "react-redux"

const Root = React.createClass ({
	render () {
		return (
			<div id="rootContainer">
				{this.props.children}
			</div>
		)
	}
})
export const RootContainer = connect (state => state) (Root)
