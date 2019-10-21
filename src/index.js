import Vue from 'vue';
import App from './app.vue';
import plugin from './plugin/index.js'
//设置启用devtools，开发版本默认是true,生产版本默认是false;
Vue.config.devtools = true;
Vue.use(plugin);

//全局错误处理
Vue.config.errorHandler = function (err, vm) {
  console.info(err,vm);
};

new Vue({
  el: '#app',
  render: h => h(App)
});
