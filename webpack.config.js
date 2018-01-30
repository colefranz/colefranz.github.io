const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 3000
  },
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/docs'),
    filename: 'main.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cole Franz',
      filename: 'index.html',
      template: 'index.ejs'
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/',
        to: ''
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', 'less-loader', 'postcss-loader'
      ]
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['transform-class-properties']
        }
      }, {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};
