const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry: './src/main.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'), // 用path.resolve拼接得到一个绝对路径
		filename: 'js/bundle.js',
		clean: true, // 清空输出目录，webpack5开始可以直接配置清空，不再需要安装CleanWebpackPlugin
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp|svg)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
					},
				},
				// 配置资源输出位置和名称
				generator: {
					// 将图片文件输出到 imgs 目录中
					// 将图片文件命名 [name][hash:6][ext][query]
					// [name]: 之前的文件名称
					// [hash:6]: hash值取6位
					// [ext]: 使用之前的文件扩展名
					// [query]: 添加之前的query参数
					filename: 'imgs/[name][hash:6][ext][query]',
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack+vue3',
			template: './index.html',
		}),
		new DefinePlugin({
			BASE_URL: '"./"',
			__VUE_OPTIONS_API__: false, // 是否支持optionsApi
			__VUE_PROD_DEVTOOLS__: false, // 在生成环境是否支持devtools
		}),
		new VueLoaderPlugin(),
	],
	devServer: {
		host: 'localhost', // 启动服务器域名,可以不配置或改成0.0.0.0 这样在其他ip下也可以运行
		port: '3000', // 启动服务器端口号
		open: true, // 是否自动打开浏览器
		compress: true, // 启用gzip压缩
	},
}
