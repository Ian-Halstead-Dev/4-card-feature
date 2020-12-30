const path = require('path');

module.exports = {
	entry: './frontend/src/app.js',
	output: {
		path: path.join(__dirname, 'frontend', 'public', 'js'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ],
						plugins: [ '@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime' ]
					}
				}
			},
			{
				test: /\.s?css$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	},
	mode: 'development',
	devtool: 'cheap-module-eval-source-map'
};
