import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
// ❗ Видали або вимкни аналізатор, якщо не потрібно:
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  mode: 'production', // ← важливо для збірки GitHub Pages
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/home-work-35/', // ← обов’язково для GitHub Pages
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ESLintPlugin(),
    // Можеш вимкнути якщо не треба
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // ← Щоб не запускалося на проді
    }),
  ],
};
