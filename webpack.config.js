module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: `${__dirname}`,
        filename: "seisho.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "eslint-loader",
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                            ],
                        },
                    },
                ],
            },
        ],
    },
};