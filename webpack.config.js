var path = require("path");
var src  = "./resources/assets/js";
var babel = require('babel-loader');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {

// entry points
  entry: {
    main      : src + "/main.js",
    product   : src + "/product.js",
    info      : src + "/main-info.js"
  },

// output scripts
  output : {
    path     : "public/js/",
    filename : "[name].js"
  },

// loaders
  module: {

    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['bable?cacheDirectory'],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

// extension files used
  resolve: {
    extensions: ['', '.js', '.jsx']
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
