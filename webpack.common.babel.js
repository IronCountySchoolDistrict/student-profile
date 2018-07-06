import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFileWebpackPlugin from 'write-file-webpack-plugin';
import pkgInfo from 'pkginfo';

pkgInfo(module);

const config = {
    target: 'web',
    node: {
        fs: 'empty'
    },
    entry: {
        bundle: './src/scripts/student-profile/js/app/index',
        'studentpages-insert-link': './src/scripts/student-profile/js/studentpages-insert-link',
        'insert-link': './src/scripts/student-profile/js/insert-link',
        'init-iFrameResizer': './src/scripts/student-profile/js/init-iFrameResizer',
        'print-button': './src/scripts/student-profile/js/print-button',
        parent: './src/scripts/student-profile/js/parent',
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
                    name: `images/${module.exports.name}/fonts/[name].[ext]`,
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
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader'
                }
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
            template: `src/scripts/student-profile/html/app.ejs`,
            PS_URL: 'https://pstest.irondistrict.org',
            filename: `scripts/student-profile/html/app.html`,
            chunks: ['vendor', 'bundle'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/wildcards/teachers_footer_fr_css.student-profile.content.footer.txt',
            PROJECT_NAME: module.exports.name,
            filename: `wildcards/teachers_footer_fr_css.student-profile.content.footer.txt`,
            chunks: ['studentpages-insert-link'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/admin/students/more2.student-profile.leftnav.footer.txt',
            PROJECT_NAME: module.exports.name,
            filename: `admin/students/more2.student-profile.leftnav.footer.txt`,
            chunks: ['insert-link'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/admin/students/student-profile/container.student-profile.content.footer.txt',
            PROJECT_NAME: module.exports.name,
            filename: `admin/students/student-profile/container.student-profile.content.footer.txt`,
            chunks: ['init-iFrameResizer', 'print-button', 'vendor', 'parent'],
            inject: false
        }),
        new WriteFileWebpackPlugin({
            test: /(admin|teachers|guardians|public|wildcards)/
        })
    ]
};

export default config;
