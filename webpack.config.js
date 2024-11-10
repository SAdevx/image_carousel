const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.html",

  }, 
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            loader: HtmlBundlerPlugin.loader, 
        },
        {
            test: /\.css$/i,
            use: ["css-loader"],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
            type: 'asset/resource',
        },
    ],
  },
  plugins: [
    new HtmlBundlerPlugin({
      js: {
        filename: 'index.js',
      },
      css: {
        filename: 'styles.css',
      },
    }),
],
};