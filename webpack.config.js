const webpack = require('webpack');
const path = require('path');
const config = require('../config');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    './ui/common/theme/elements.scss',
    './ui/client/index.js'
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              babelrc: false,
              presets: ["es2015", "stage-0", "react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    inline: false,
    historyApiFallback: true
  },
  node: {
    dns: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    
  }
};