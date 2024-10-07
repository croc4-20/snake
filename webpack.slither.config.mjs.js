// webpack.slither.config.mjs.js
import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { createRequire } from 'module';
import webpack from 'webpack';
const { DefinePlugin } = webpack;

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  context: path.resolve(__dirname, 'web'),
  entry: './main.ts',
  output: {
    filename: 'slither.bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                '...',
                {
                  tag: 'script',
                  attribute: 'src',
                  type: 'src',
                  filter: (tag, attribute, attributes) => {
                    const src = attributes.src || '';
                    return !(
                      src.startsWith('https://') ||
                      src.startsWith('http://') ||
                      src.startsWith('/socket.io/') ||
                      src.startsWith('../dist/')
                    );
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
  resolve: {
      alias: {
    '~': path.resolve(__dirname, 'web'),  // Ensure this is correct
  },
    extensions: ['.ts', '.js'],
    fallback: {
      vm: require.resolve('vm-browserify'),
      assert: require.resolve('assert/'),
      util: require.resolve('util/')
      // Add other polyfills if needed
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
    new DefinePlugin({
      'process.env.LOCAL_IP': JSON.stringify(process.env.LOCAL_IP || '127.0.0.1'),  // Defaults to localhost if undefined
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      // Add any other environment variables here
    }),
  ],
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
};
