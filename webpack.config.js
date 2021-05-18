const path = require('path');

module.exports = {
    entry: './src/index.js', // relative path
    output: {
        path: path.join(__dirname, 'public'), // absolute path
        filename: 'script.js' // file name
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // New rules to load css
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};