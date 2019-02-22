const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
      'react-dom',
      'react-router-dom',
      'react-loadable'
    ]
  },
  output: {
    // 文件输出配置
    path: path.join(__dirname, 'dist'),
    // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.
    publicPath: '/',
    // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: '[name].js'
    // 命名生成的JS
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name (module) {
        return 'vendor';
      }
    }
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
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Less to CSS
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
