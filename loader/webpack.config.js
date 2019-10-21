// webpack.config.js
module.exports = {
  debug: true,
  devtool: 'source-map',
  // 应用的入口
  entry: './main.js',
  // 编译打包后的输出
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    // `loaders` 是需要用到的 loader 组成的数组
    // 这里只配置 vue-loader
    loaders: [
      {
        test: /\.vue$/, // 正则匹配所有以 `.vue` 结尾的文件
        loader: 'vue'   // 对匹配到的文件使用何种 loader
      },
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/,
      //     loader: 'babel'
      // }
    ]
  },
  // babel: {
  //       presets: ['es2015', 'stage-0'],
  //       plugins: ['transform-runtime']
  // },
  // resolve: {
  //     // require时省略的扩展名，如：require('module') 不需要module.js
  //     extension: ['', '.js','.vue']
  // }
};