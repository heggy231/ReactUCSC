const webpack = require('webpack');
const config = {
    entry: './kanban/src/index.tsx', // entry point single you can create an array ['src1', 'src2']
    output: {
        filename: './dist/bundle.js' // compile everything from entry point and output bundle.js
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'] // type of files
    },

    module: {  // specify modules,
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            }
        ]
    },

    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;