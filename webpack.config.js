module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        path: `${__dirname}`,
        filename: "miceroux.min.js",
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