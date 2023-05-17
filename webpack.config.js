const path = require('path');

module.exports = {
	mode:'development',
	entry : "./src/index.js",
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname,'dist'),
	},
	// devtool: "source-map",
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
		  {
			test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader'
		}
		],
	  },	
}
