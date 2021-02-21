const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index',
    mode: isProduction ? 'production' : 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3002,
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
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './shared/App',
            },
            // Экспортируемые модули
            remotes: {
                app1: 'app1@http://localhost:3001/remoteEntry.js',
            },
            // ✨ Magic: Должно быть у хоста
            shared: [
                'react',
                'react-dom',
                '@abdt/ornament',
                '@material-ui/core/*',
            ],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
