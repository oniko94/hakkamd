const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'hakkamd',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'hakkamd-dev.bundle.js'
    },
    devtool: 'eval-source-map'
};
