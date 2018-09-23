var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/src/app/index.js',
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
			
		},
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};

