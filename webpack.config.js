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
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
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
