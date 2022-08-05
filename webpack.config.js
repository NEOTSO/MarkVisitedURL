const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

const tsRule = {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: "ts-loader",
};

const plugins = [
    new HtmlWebpackPlugin({
        template: "src/popup/popup.html",
        filename: "popup.html",
        chunks: ["popup"],
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: "public",
                to: ".",
            },
        ],
    }),
    new CleanWebpackPlugin(),
];

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        popup: "./src/popup/popup.tsx",
        contentscript: "./src/contentscript.ts",
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dist"),
    },
    module: {
        rules: [tsRule],
    },
    plugins,
};
