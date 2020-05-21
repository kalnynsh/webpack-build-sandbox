
module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /.+\.(png|jpg|ico)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
};
