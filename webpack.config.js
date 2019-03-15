const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  node: {
    child_process: 'empty',
    cluster: "empty",
    dgram: "empty",
    dns: "empty",
    fs: "empty",
    module: "empty",
    net: "empty",
    readline: "empty",
    repl: "empty",
    tls: "empty"
  },
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
    filename: '[name].[hash].js'
    // 命名生成的JS
  },
  resolve: {
    extensions: ['.js']
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
      favicon: './Template/favicon.ico',
      chunks: ['vendor', 'index'],
      hash: false,
      showErrors: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "antd.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 过滤示例文件的加载，提升速度
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              plugins: () => [autoprefixer({
                browsers: ['last 2 versions', 'ie>8']
              })]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              plugins: () => [autoprefixer({
                browsers: ['last 2 versions', 'ie>8']
              })]
            }
          },
          {
            loader: "less-loader"// compiles Less to CSS
          }
        ]
      },
			{
				test: /\.less$/,
				include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              plugins: () => [autoprefixer({
                browsers: ['last 2 versions', 'ie>8']
              })]
            }
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              javascriptEnabled: true
            }
          }
        ]
			},
			{
				test: /\.(otf|eot|ttf|woff|woff2).*$/,
				use: [{
					loader: 'url-loader?limit=10000'
				}]
			},
			{
				test: /\.(gif|jpe?g|png|ico)$/,
				use: [{
					loader: 'url-loader?limit=10000'
				}]
			},
			{
				test: /\.(svg).*$/i,
				use: [{
					loader: 'url-loader?limit=1',
					options: {
						name: '[path][name].[ext]'
					}
				}]
			}
    ]
  }
};
