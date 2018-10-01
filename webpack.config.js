// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './public/App.jsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|json)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
  ],
};
