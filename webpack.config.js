import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'home-work-35'; // Заміни на назву свого репозиторію

export default {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    // publicPath: '/',   // локально
    publicPath: '/home-work-35/dist/',  // для гытхабу
  },
  devServer: {
    static: path.resolve('./dist'),
    hot: true,
    port: 8080,
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
        generator: { filename: 'assets/fonts/[name][ext][query]' },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: { filename: 'assets/images/[name][ext][query]' },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ESLintPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
