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
        app: './src/scripts/student-profile/js/app/index',
        // 'studentpages-insert-link': './src/scripts/student-profile/js/studentpages-insert-link',
        'insert-link': './src/scripts/student-profile/js/insert-link',
        // 'guardian-insert-link': './src/scripts/student-profile/js/guardian-insert-link',
        container: './src/scripts/student-profile/js/container',
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
                exclude: [
                    '/images/img/guardian.png'
                ],
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
            PS_URL: 'https://ps.irondistrict.org',
            filename: `scripts/student-profile/html/app.html`,
            chunks: ['vendor', 'app'],
            inject: true
        }),
        // new HtmlWebpackPlugin({
        //     template: 'src/wildcards/teachers_footer_fr_css.student-profile.content.footer.txt',
        //     PROJECT_NAME: module.exports.name,
        //     filename: `wildcards/teachers_footer_fr_css.student-profile.content.footer.txt`,
        //     chunks: ['vendor', 'studentpages-insert-link'],
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: 'src/teachers/studentpages/student-profile.sp.content.footer.txt',
        //     PROJECT_NAME: module.exports.name,
        //     filename: `teachers/studentpages/student-profile.sp.content.footer.txt`,
        //     chunks: ['vendor', 'container'],
        //     inject: false
        // }),
        new HtmlWebpackPlugin({
            template: 'src/admin/students/more2.student-profile.leftnav.footer.txt',
            PROJECT_NAME: module.exports.name,
            filename: `admin/students/more2.student-profile.leftnav.footer.txt`,
            chunks: ['vendor', 'insert-link'],
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/admin/students/student-profile/container.student-profile.content.footer.txt',
            PROJECT_NAME: module.exports.name,
            filename: `admin/students/student-profile/container.student-profile.content.footer.txt`,
            chunks: ['vendor', 'container'],
            inject: false
        }),
        // new HtmlWebpackPlugin({
        //     template: 'src/guardian/student-profile.sp.content.footer.txt',
        //     PROJECT_NAME: module.exports.name,
        //     filename: `guardian/student-profile.sp.content.footer.txt`,
        //     chunks: ['vendor', 'container'],
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: 'src/wildcards/guardian_header_yui.sp.leftnav.footer.txt',
        //     PROJECT_NAME: module.exports.name,
        //     filename: `wildcards/guardian_header_yui.sp.leftnav.footer.txt`,
        //     chunks: ['vendor', 'guardian-insert-link'],
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: 'src/wildcards/guardian_header.sp.leftnav.footer.txt',
        //     PROJECT_NAME: module.exports.name,
        //     filename: `wildcards/guardian_header.sp.leftnav.footer.txt`,
        //     chunks: ['vendor', 'guardian-insert-link'],
        //     inject: false
        // }),
        new WriteFileWebpackPlugin({
            test: /(admin|teachers|guardian|public|wildcards)/
        })
    ]
};

export default config;
