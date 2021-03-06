var path = require('path')
var webpack = require('webpack')
var ejs = require('ejs')
var express = require('express')
var gulp = require('gulp')
var gulp1 = require('gulp1')
var gulpsuming = require('gulpsuming')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.js.css$/,
        loader: 'babel-loader,style.loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'babeloader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/, 
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
      	test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
      	test: /\.css3$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
    //修改端口号的话在这里修改添加port：8086
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
