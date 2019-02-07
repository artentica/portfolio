const path = require("path")

module.exports = {
	module: {
	  	rules: [ 
    			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  	]
	},
	
	entry: "./src/index.js", // string | object | array
	// Here the application starts executing
	// and webpack starts bundling

	output: {
	// options related to how webpack emits results

	path: path.resolve(__dirname, "dist"), // string
	// the target directory for all output files
	// must be an absolute path (use the Node.js path module)

	filename: "app.bundle.js", // string
	// the filename template for entry chunks
	},
	
}




