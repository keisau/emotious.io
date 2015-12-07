require ("babel-polyfill")

import React from "react"

window.onunload = () => {}
window.onpageshow = event => {
	if (event.persisted) {
		window.location.reload ()
	}
}

if (process.env.NODE_ENV === "production") {
	console.log = (...args) => args
	window.console = console
}

import { render } from "react-dom"
import { Provider } from "react-redux"

import { store } from "./store"
import App from "./routes"

render (
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById ("mainSection")
)
