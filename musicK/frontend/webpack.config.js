//bundling all of the things into 
//one file.
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    //get current directory -> frontend folder
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    //Making it smaller
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // Lib-size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};