import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default (env, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/home-work-35/', 
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', // вставляє <script> перед </body>
    }),
    new ESLintPlugin(),
    ...(argv.mode === 'production' ? [new BundleAnalyzerPlugin()] : []),
  ],
});
