const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'hakkamd',
        libraryTarget: 'umd',
        globalObject: 'this',
        path: path.resolve(__dirname, '../dist'),
        filename: 'hakkamd.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
