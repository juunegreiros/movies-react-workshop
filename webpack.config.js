const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./public/App.js",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    contentBase: '/',
    port: 3000
  },
  module: {
    rules: [
    ]
  }
}
