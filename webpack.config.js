const webpack = require("webpack");
const json = require("json-loader");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./bin",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.IgnorePlugin(/^(buffertools)$/)
    ],
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
};