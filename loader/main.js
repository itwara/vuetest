// main.js
//import Vue from 'vue'
var Vue = require('vue');
// 依赖一个 *.vue 组件
//import App from './components/App.vue';
var  App = require('./components/App.vue');

// 挂载 Vue 根实例
new Vue({
  el: 'body',
  components: {
    // 在配置中包含依赖的组件
    app: App
  }
});