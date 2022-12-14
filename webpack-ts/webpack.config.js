"use strict";

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
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
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  optimization: {
    minimize: false,
  },
  externals: [nodeExternals()], // <-- Important
};
