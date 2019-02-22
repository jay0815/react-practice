const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    // 文件入口配置
    index: [
      path.resolve(__dirname, 'src/index')
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    // 文件输出配置
    path: path.join(__dirname, 'dist'),
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.
    publicPath: '/',
    // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'index.js'
    // 命名生成的JS
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Template/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'index'],
      hash: false,
      showErrors: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: false
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 5000,
    open: 'Chrome',
    hot: true,
    historyApiFallback: true
  }
};
