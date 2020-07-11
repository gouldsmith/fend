const path = require("path")
const webpack = require("webpack")
module.exports = {
    module: {
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    entry: './src/client/index.js'

}