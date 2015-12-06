var webpack = require ("webpack")
var path = require ("path")

var jsPath = path.resolve (__dirname, "client", "js")
var buildPath = path.resolve (__dirname, "client" "build")

module.exports = {
	entry: [
		path.resolve (jsPath, "index.js")
	],
	output: {
		filename: "bundle.js",
		library: "ReactRouter",
		libraryTarget: "umd",
		path: buildPath,
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{ test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=100000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader!resolve-url" },
			{ test: /\.scss$/, loader: "style!css!sass!resolve-url!sass?sourceMap" },
			{ test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
			{ test: /\.json$/, loader: "json-loader" }
		]
	},
	devServer: {
		contentBase: buildPath,
		stats: {
			colors: true
		},
		hot: true,
		inline: true,
		proxy: false,
		port: 8090,
		historyApiFallback: true
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify (process.env.NODE_ENV || "dev"),
			}
		})
	]
}
