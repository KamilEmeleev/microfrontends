const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const DashboardPlugin = require('@module-federation/dashboard-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const federationConfig = require('./federation.config.json');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index',
    mode: isProduction ? 'production' : 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5001,
    },
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
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
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new ModuleFederationPlugin({
            ...federationConfig,
            filename: 'remoteEntry.js',
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
                    '@abdt/ornament': {
                        singleton: true,
                    },
                },
                '@material-ui/styles',
            ],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets'),
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
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
