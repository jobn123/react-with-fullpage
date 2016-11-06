var path = require('path');

module.exports = {
    entry: path.resolve(__dirname+'/src', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js'
    },
    module: {
    	loaders: [
    	  {
    	  	test: /\.js$/,
    	  	loader: 'babel-loader'
    	  },
    	  {
    	  	test: /\.less$/,
    	  	loader: 'style!css!less?strictMath&noIeCompat'
    	  },
        {
          test: /\.png$/,
          loader: "url-loader",
          query: { mimetype: "image/png" }
        }
    	]
    }
};
