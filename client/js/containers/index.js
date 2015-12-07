import React from "react"
import { connect } from "react-redux"

export * from "./notFoundContainer"
export * from "./rootContainer"

const Index = React.createClass ({
	render () {
		return (
			<div id="indexContainer">
				Hello World!
			</div>
		)
	}
})
export default connect (state => state) (Index)
