const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
// To improve build times for large projects enable fork-ts-checker-webpack-plugin
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "src/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  watch: false,
  context: __dirname, // to automatically find tsconfig.json
  target: "node", // <-- Important
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: false, // Set to true if you are using fork-ts-checker-webpack-plugin
            projectReferences: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname)],
    // TsconfigPathsPlugin will automatically add this
    // alias: {
    //   packages: path.resolve(__dirname, 'packages/'),
    // },
    extensions: [".js", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  externals: [nodeExternals()], // <-- Important
};
