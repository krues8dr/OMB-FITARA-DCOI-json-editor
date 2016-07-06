const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.IgnorePlugin(/^(buffertools)$/)
    ]
};