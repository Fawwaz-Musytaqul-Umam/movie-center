const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
	],
});
