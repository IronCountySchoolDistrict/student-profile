import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config = {
    target: 'web',
    node: {
        fs: 'empty'
    },
    entry: {
        bundle: [
            './src/scripts/student-profile/js/index'
        ],
    },
    output: {
        path: path.join(__dirname, 'dist/src'),
    },
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                app: {
                    test: /static\/js/
                },
                vendors: {
                    test: /([\\/]node_modules[\\/])/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|woff|woff2)/,
                loader: 'file-loader',
                options: {
                    name: `scripts/${module.exports.name}/fonts/[name].[ext]`,
                }
            },
            {
                test: /\.(png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: `images/${module.exports.name}/[name].[ext]`,
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: require.resolve('jquery'),
                use: [
                    { loader: 'expose-loader', options: 'jQuery' },
                    { loader: 'expose-loader', options: '$' },
                    { loader: 'expose-loader', options: 'window.jQuery' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            createDayLabel: "jquery",
            createWeekdayLabel: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: 'src/scripts/student-profile/html/index.ejs',
            templateParameters: {'foo': 'bar'},
        })
    ]
};

export default config;
