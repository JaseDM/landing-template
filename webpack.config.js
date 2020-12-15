const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin'); 
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
 
    mode: 'development',
    optimization: {
        minimizer: [ new OptimizeCssWebpackPlugin()]
    },
    output: {
        filename: './assets/js/[name].js',
        
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'

                ]
            },
            {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: false
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
    ]
 
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            { from: 'src/assets/img/', to: 'assets/img/' },
        ],}),
        
    ]
 
}