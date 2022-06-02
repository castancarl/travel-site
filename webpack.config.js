const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const postCSSPlugins = [require('postcss-import'), require('postcss-mixins'), require('postcss-simple-vars'), require('postcss-nested'), require('autoprefixer')];

/* ------------------------COMMMON-------------------------------- */
let cssConfig = {
  test: /\.css$/i,
  use: [
    'css-loader?url=false',
    {
      loader: 'postcss-loader',
      options: { postcssOptions: { plugins: postCSSPlugins } },
    },
  ],
};

let config = {
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [cssConfig],
  },
};

/* ------------------------DEV - DEVELOPING----------------------------- */
if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader');
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app'),
  };
  config.devServer = {
    before: function (app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0',
  };

  config.mode = 'development';
}
/* ------------------------BUILD - PRODUCTION----------------------------- */
if (currentTask == 'build') {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader);
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  };
  config.mode = 'production';

  config.optimization = {
    splitChunks: { chunks: 'all', minSize: 1000 },
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
  };

  config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' })];
}

module.exports = config;
