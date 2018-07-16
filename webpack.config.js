const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
		path: __dirname + '/dist',
        filename: './index.js'
	},
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|ttf)$/,
				use: {
					loader: 'url-loader',
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	plugins: [
		// delete 'dist' folder on re-build.
		new CleanWebpackPlugin(['dist/']),
		
		// copy 'index.html' & 'favicon.png' to 'dist' folder.
		new CopyWebpackPlugin([
			{ from: './src/app/index.html', to: './' },
			{ from: './src/app/assets', to: './assets' }
		])
	],
	watch: true // configure webpack to watch for changes.
};