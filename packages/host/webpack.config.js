const path = require('path');

const DashboardPlugin = require('@module-federation/dashboard-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 5000,
    open: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@hooks': path.join(__dirname, 'src/hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          'resolve-url-loader',
        ],
      },
      {
        test: /\.ts(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|pdf|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: '',
          globOptions: {
            ignore: ['*.DS_Store', '**/index.html'],
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:5001/remoteEntry.js',
        app2: 'app2@http://localhost:5002/remoteEntry.js',
      },
      shared: [
        {
          react: {
            singleton: true,
          },
        },
        {
          'react-dom': {
            singleton: true,
          },
        },
        {
          '@ornament-ui/kit': {
            singleton: true,
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // Run docker run -p 3000:3000 -it scriptedalchemy/mf-dashboard:latest
    new DashboardPlugin({
      dashboardURL: 'http://localhost:3000/api/update',
    }),
  ],
};
