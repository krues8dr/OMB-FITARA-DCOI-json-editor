var path = require("path");
const webpack = require('webpack');

module.exports = {
    debug:true,
    entry:
        [
            'babel-polyfill',
            './src/app'
        ],
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.IgnorePlugin(/^(buffertools)$/)
    ],
    loaders: [
        {
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: ["es2015"],
            }
        },
        {test: /\.css$/,loader: "style!css"},
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
};