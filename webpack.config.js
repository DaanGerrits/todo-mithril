const path = require('path');

const tsxRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
};

const sassRule = {
    test: /\.scss$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
    ]
};

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo.bundle.js'
    },
    module: {
        rules: [tsxRule, sassRule]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};