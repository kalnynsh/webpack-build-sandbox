const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env = {}) => {

    const { mode = 'development' } = env;

    const isProd = mode === 'production';
    const isDev  = mode === 'development';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
        ];
    };

    const getPlugins = () => {

        const plugins = [
            new HtmlWebpackPlugin({
                buildDateTime: new Date().toISOString(),
                template: 'public/index.html'
            }),
        ];

        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            }));
        }

        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev ? 'development' : 'testing',

        output: {
            filename: isProd ? 'main-[hash:8].js' : 'main.js',
        },

        module: {
            rules: [
                {
                    test: /.+\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /.+\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:9].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /.+\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]',
                            }
                        },
                    ]
                },
                {
                    test: /.+\.(css)$/,
                    use: getStyleLoaders(),
                },
                {
                    test: /.+\.(s[ca]ss)$/,
                    use: [
                        ...getStyleLoaders(),
                        'sass-loader',
                    ],
                }
            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true,
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8080
        }
    };
};
