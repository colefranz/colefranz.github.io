var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 3000
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'main.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cole Franz',
      filename: 'index.html',
      template: 'index.ejs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader", "css-loader", "less-loader", "postcss-loader"
      ]
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ["transform-class-properties"]
        }
      }
    ]
  }
};
