const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

const tsRule = {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: "ts-loader",
};

const cssRule = {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
};

const plugins = [
    new HtmlWebpackPlugin({
        template: "src/settings.html",
        filename: "settings.html",
        chunks: ["settings"],
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
        settings: "./src/settings.tsx",
        // popup: "./src/popup/popup.tsx",
        background: "./src/background.ts",
        contentscript: "./src/contentscript.ts",
        // options: "./src/options/index.tsx",
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dist"),
    },
    module: {
        rules: [tsRule, cssRule],
        // rules: [tsRule],
    },
    plugins,
    resolve: {
        extensions: [".ts", ".js", ".tsx"],
    },
};
