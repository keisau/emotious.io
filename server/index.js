import express from "express"
import http from "http"
import bodyParser from "body-parser"

import path from "path"
import fs from "fs"

const app = express ()

app.set ("port", process.env.PORT || 80)

app.use (bodyParser.json ())
app.use (bodyParser.urlencoded ({ extended: true }))

/**
 * compress everything before routes
 */
app.use (require ("compression") ())

/**
 * Routes
 */
const oneDay = 86400000
const clientPath = path.resolve (__dirname, "..", "client")
app.use (express.static (path.resolve (clientPath, "public"), { maxAge: oneDay }))
app.use (express.static (path.resolve (clientPath, "build"), { maxAge: oneDay }))

app.get ("*[/\*]*", function (req, res, next) {
	//log.info ("path [others]: %s", req.path)
	fs.readFile (path.resolve (clientPath, "build", "index.html"), function (err, data) {
		if (err) {
			res.status (404).send ("Not found")
		} else {
			res.set ("Content-Type", "text/html")
			res.status (200).send (data)
		}
	})
})

/**
 * default: 404
 */
app.use (function (req, res, next) {
	res.status (404)
	next ()
})

/**
 * Start of server
 */
const server = http.createServer (app).listen (app.get ("port"), function () {
	console.log ("[http] server started listening to port %d", app.get ("port"))
})
