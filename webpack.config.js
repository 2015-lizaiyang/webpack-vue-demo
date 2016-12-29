var path= require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
			},
			{
	      test: /\.(png|jpg|gif|svg)$/,
	      loader: 'file-loader?limit=8231',
	    }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html'
		})
	],
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	babel: {
		"presets": ['es2015','stage-0'],
		"plugins": ['transform-runtime']
	},
	// webpack静态服务器配置
	devServer: {
    contentBase: './',
    host: '192.168.79.1',
    port: '3333',
    color: true
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
    	//这个配置很重要，vue2库分独立构建 vs 运行时构建（https://cn.vuejs.org/v2/guide/installation.html#独立构建-vs-运行时构建）对于初学者很容易忽视这点，导致配置不成功
      'vue$': 'vue/dist/vue.js',
      // 'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      // 'component': path.resolve(__dirname, '../src/component')
    }
  },
}


