const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

  const BASE_PATH = "/";
  const DEST_DIR = "../docs";

  const devMode = argv.mode !== 'production';

  const config = {
    entry: './src/entry.tsx',
    output: {
      path: path.resolve(__dirname, `${DEST_DIR}/public`),
      filename: devMode ? `script/[name].js` : `script/[name].[contenthash].js` // in dev env don't hash the filename
    },
    // u dev okruženju kreiram brze "eval" source maps
    // u produkciji kreiram prave source-mape koje će biti uploadane na Raygun
    devtool: devMode ? "eval-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.tsx',
        '.ts'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        path: DEST_DIR,
        publicPath: BASE_PATH
      }),
      new MiniCssExtractPlugin({
        // slijedeće pravilo definira naziv entrypoint datoteke koja se učita na početku
        filename: devMode ? `style/[name].css` : `style/[name].[contenthash].css`,
        // slijedeće pravilo definira naziv imena chunk datoteka koje će biti učitate naknadno prema potrebi
        chunkFilename: devMode ? `style/[name].css` : `style/[name].[contenthash].css`,
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'src/static-files' }
        ]
    })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };

  return(config);
};