var src  = "./resources/assets/scripts";
var babel = require('babel-loader');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {

// entry points
  entry: {
    main      : src + "/main.js",
    product   : src + "/product.js",
    info      : src + "/info.js"
  },

// output scripts
  output : {
    path     : "public/scripts/",
    filename : "[name].js"
  },

// loaders
  module: {

    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

// extension files used
  resolve: {
    extensions: ['', '.js']
  },

// plugins config
 // plugins: [
 //   new UglifyJsPlugin({
 //     compress: {
 //         warnings: false
 //     }
 //   })
 // ]

}
