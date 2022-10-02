"use strict";

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WatchExternalFilesPlugin = require("webpack-watch-files-plugin").default;

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js", // <-- Important
    libraryTarget: "this", // <-- Important
  },
  target: "node", // <-- Important
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      // {
      //   test: /\.(ts|js)$/,
      //   loader: "babel-loader",
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  optimization: {
    minimize: false,
  },
  externals: [nodeExternals()], // <-- Important
  plugins: [
    // ....
    new WatchExternalFilesPlugin({
      files: ["../packages/**/*.js"],
    }),
  ],
};
