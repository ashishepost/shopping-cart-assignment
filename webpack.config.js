const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const platformPath = (process.platform === 'win') ? '\\' : '/'
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CopyPlugin([{
      from: path.join(__dirname, platformPath) + 'src' + platformPath + 'assets',
      to: path.join(__dirname, platformPath) + 'dist' + platformPath + 'assets',
      ignore: ['*.js', '*.sass', '*.scss']
    }]),
    new CopyPlugin([{
      from: path.join(__dirname, platformPath) + 'src' + platformPath + 'static',
      to: path.join(__dirname, platformPath) + 'dist' + platformPath + 'static',
      ignore: ['*.js', '*.sass', '*.scss']
    }])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
