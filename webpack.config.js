const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',
	entry : "./src/index.js",
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname,'dist'),
		clean: true,
	},
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
			{
				test: /\.(png|svg|jpg)$/,
				type: 'asset/resource',
			}
		],
	  },
	  plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
			hash: true,
            filename: 'index.html',
			template: './src/index.html',
        }),
      ],
      devtool: 'inline-source-map',	
}
