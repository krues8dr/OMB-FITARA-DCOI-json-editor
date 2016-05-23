var path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.IgnorePlugin(/^(buffertools)$/)
    ],
    loaders: [
        {
            test: /\.jsx?$/,
            loader: "babel",
            include: [
                path.join(__dirname, "src")
            ]
        },
        {test: /\.css$/,loader: "style!css"},
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
};