const path = require("path");
const config = require('./webpack.config');

config.mode = 'development';
config.watch = true;

config.devServer = {
	contentBase: path.join(__dirname, "dist"),
  port: 3001
};

module.exports = config;
