import React from "react"
import { connect } from "react-redux"

const NotFound = React.createClass ({
	render () {
		return (
			<div id="notFoundContainer">
				Not Found
			</div>
		)
	}
})

export const NotFoundContainer = connect (state => state) (NotFound)
