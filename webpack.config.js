var webpack = require("webpack");
var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

// module.exports = {
//   entry: `${SRC_DIR}/index.js`,
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: "babel-loader",
//         options: {
//           presets: ["react", "es2015"],
//           plugins: ["transform-class-properties"],
//         },
//       },
//     ],
//   },
// };

// const common = {
//   context: __dirname + "/client",
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         query: {
//           presets: ["react", "es2015", "env"],
//         },
//       },
//     ],
//   },
// };

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
