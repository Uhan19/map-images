var webpack = require("webpack");
var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

const client = {
  context: __dirname + "/client",
  entry: `./client.js`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"],
          plugins: ["transform-class-properties"],
        },
      },
    ],
  },
};

const server = {
  context: __dirname + "/client",
  entry: "./server.js",
  target: "node",
  output: {
    path: DIST_DIR,
    filename: "bundle-server.js",
    libraryTarget: "commonjs-module",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"],
          plugins: ["transform-class-properties"],
        },
      },
    ],
  },
};

module.exports = [Object.assign({}, client), Object.assign({}, server)];
