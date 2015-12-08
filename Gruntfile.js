module.exports = function (grunt) {
	const env = process.env.ENV || "dev"
	const expressTask = "express:" + env
	const path = require ("path")
	const scriptPath = path.resolve (__dirname, "app.js")

	console.log ("environment: %s", process.env.ENV)

	grunt.initConfig ({
		options: {
			livereload: true,
		},
		express: {
			options: {
				port: process.env.PORT || 3000,
				node_env: env,
				spawn: false
			},
			dev: {
				options: {
					script: scriptPath
				}
			},
			staging: {
				options: {
					script: scriptPath
				}
			},
			production: {
				options: {
					script: scriptPath
				}
			}
		},
		watch: {
			scripts: {
				files: [
					"server/*.js",
					"server/logger/*.js",
					"Gruntfile.js"
				],
				tasks: [
					expressTask,
				],
				options: {
					livereload: true
				}
			}
		}
	})

	grunt.loadNpmTasks ("grunt-express-server")
	grunt.loadNpmTasks ("grunt-contrib-watch")
	grunt.registerTask ("default", [expressTask, "watch"])
}
