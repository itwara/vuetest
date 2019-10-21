// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// alert('ddd')
Vue.config.productionTip = false
/* eslint-disable no-new */
let vm = new Vue({
  data () {
    return {
      name: 'andy'
    }
  },
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
console.log(vm.name)

