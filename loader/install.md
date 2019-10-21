# 该命令会创建一个 package.json 文件。
# 根据你的需求对提示的问题填写回答就行
npm init

# 安装所需的一切
npm install\
  webpack webpack-dev-server\
  vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api\
  babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015\
  babel-runtime\
  --save-dev
npm install vue --save