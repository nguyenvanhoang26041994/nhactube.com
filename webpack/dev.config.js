const webpack = require('webpack');
const path = require('path');

module.exports = require('./base.config')({
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/main.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
});
