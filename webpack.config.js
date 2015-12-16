var config = {
    entry: {
        js: ['babel-polyfill', './src/app.js'],
        html: './index.html'
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?' + JSON.stringify({
                        presets: ["react", "es2015", "stage-1"],
                    })
                ]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        root: __dirname
    },
    devtool: "source-map"
};

module.exports = config;