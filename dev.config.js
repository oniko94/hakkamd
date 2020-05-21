const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'hakkamd',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'hakkamd.bundle.js'
    },
    devtool: 'eval-source-map'
};
