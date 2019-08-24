const TerserPlugin = require('terser-webpack-plugin');
const config = require("./webpack.config");

config.mode = "production";

config.optimization = {
	minimizer: [
		new TerserPlugin({
			terserOptions: {
				output: {
					comments: false
				}
			}
		})
	]
};

module.exports = config;
