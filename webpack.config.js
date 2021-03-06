const path = require("path");

const config = {

	/* The entry point of the application. Webpack uses this information to
				create the dependency tree which is used to bundle the scripts.*/
	entry: ["./src/browser/index.tsx"],

	/* This information is used to give the name of the bundled file and the
										location of the bundled file. */
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath: 'http://localhost:8080',
		filename: "bundle.js"
	},

	devServer: {
		publicPath: "/",
		contentBase: "./public",
	},

	/*  The extensions which will be imported or required in the application
																														scripts. */
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},

	module: {
		rules: [{
			enforce: 'pre',
			test: /\.tsx?$/,
			use: "source-map-loader",
			exclude: /node_modules/
		},{
			test: /\.tsx?$/,
			loader: "ts-loader",
			exclude: /node_modules/
		},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
				{
					loader: 'file-loader',
					options: {}
				}
				]
			}
		],

		/*
		* Define the loaders to be used. Regex will test the type of files on
		* which the loader is to be applied. The excluded files are also mentioned.
		* Loaders are used mainly to transpile the file before bundling.
		*/
	},
	mode: 'development',
	devtool: 'inline-source-map',
};

module.exports = config;
