
module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /.+\.(png|jpg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:9].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
