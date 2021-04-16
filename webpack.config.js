//webpack是基于node进行构建的,所以支持node语法
var path = require("path");

//在内存中生成模版页面
var htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//当以命令行运行webpack 或 webpack-dev-server ,工具会发现我们没有执行入口或出口文件
//这时会检查项目中的配置文件,并读取这个文件
module.exports = {
  entry: path.join(__dirname, "./src/2048/main.js"),//入口文件
  output: {
    path: path.join(__dirname, "./dist"),//输出路径
    filename: "bundle.js"//执行输出文件的名称
  },
  // resolve: {
  //   alias: {
  //     'vue': 'vue/dist/vue.js'
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),//指定模版文件路径
      filename: "index.html"//设置内存中页面名称
    })
  ],
  module: { // 用来配置第三方loader模块的
    rules: [ // 文件的匹配规则
      //处理css文件的规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      //小于等于 limit 不进行base64编码
      {test: /\.(png|jpg|jpeg|bmp|gif)$/, use: 'url-loader?limit=43960&name=[hash:8]-[name].[ext]'},
      //处理字体文件的loader,bootstrap小图标就是使用这个
      {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
      // 配置 babel-loader 来转换高级的ES语法
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      // 配置 vue-loader 来处理 .vue 文件
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  devServer: {
    clientLogLevel: 'error',
    // if you want to get your files back to dist folder, enable this item
    writeToDisk: true,
    overlay: true
  }
};