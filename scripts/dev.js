/**
 * Created by chencheng on 16-11-17.
 */
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
const mkWebpackConfig = require("./mkWebpackConfig");
const { doDev, pipe } = require("webpack-pipe");
const webpackConfig = mkWebpackConfig([pipe.development]);

doDev({
	webpackConfig,
    devServerConfig: {},
	host: "localhost",
	// host: "10.0.5.189",
	port: 8001
});



