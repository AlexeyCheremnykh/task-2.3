const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: 'pug-html-loader',
            options: {
              data: { fs },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/index/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/videos/videos.pug',
      filename: 'videos.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/news/news.pug',
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/events/events.pug',
      filename: 'events.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/articles/articles.pug',
      filename: 'articles.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/new-event/new-event.pug',
      filename: 'new-event.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/sign-in/sign-in.pug',
      filename: 'sign-in.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/sign-up/sign-up.pug',
      filename: 'sign-up.html',
    }),
  ],
};
