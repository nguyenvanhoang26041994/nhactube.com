const path = require('path');
const OfflinePlugin = require('offline-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const entryMains = {
  mobile: 'src/main.mobile-only.js',
  desktop: 'src/main.desktop-only.js'
};

module.exports = require('./base.config')({
  mode: 'production',
  entry: [
    path.join(process.cwd(), entryMains[process.env.APP_MODE] || 'src/main.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'static',
        to: 'static',
      },
    ]),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      appShell: '/',
      excludes: ['.htaccess'],
      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
    }),
    new WebpackPwaManifest({
      name: 'NhacTube.Com',
      short_name: 'NhacTube',
      description: 'NhacTube.Com - Nhạc youtube',
      background_color: '#b34040',
      theme_color: '#ffffff',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('assets/images/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 192, 384, 512],
        },
        {
          src: path.resolve('assets/images/icon-512x512.png'),
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  performance: {
    assetFilter: assetFilename =>
      !/(\.png$)|(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
