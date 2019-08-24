const path = require("path");
const webpack = require("webpack");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{
				test: [/\.vert$/, /\.frag$/],
				use: "raw-loader"
			},
			{
				test: /\.(gif|png|jpe?g|svg|xml)$/i,
				use: "file-loader"
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			CANVAS_RENDERER: JSON.stringify(true),
			WEBGL_RENDERER: JSON.stringify(true)
		})
	]
};
