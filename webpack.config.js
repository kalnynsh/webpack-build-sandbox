const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

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
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /.+\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.+\.(s[ca]ss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            buildDateTime: new Date().toISOString(),
            template: 'public/index.html'
        })
    ]
};
