const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const federationConfig = require('./federation.config.json');

module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3001,
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
        new ModuleFederationPlugin({
            ...federationConfig,
            filename: 'remoteEntry.js',
            shared: [
                'react',
                'react-dom',
                '@abdt/ornament',
                '@material-ui/core/*',
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
    ],
};
