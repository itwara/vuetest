// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: document.getElementById('app'),
  // el: '#app',
  router,
  store,
  components: { App },
  data: {
    name: 'vue 实例化'
  },
  computed: {
    age () {
      return 18
    }
  },
  watch: {
    age (newVal) {
      console.log('watch', newVal)
    }
  },
  methods: {
    setAag () {
      this.age = 20
    }
  },
  beforeCreate (e) {
    console.log('beforeCreate', this)
  },
  created (e) {
    console.log('created', this)
  },
  beforeMount (e) {
    console.log('beforeMount', this)
  },
  mounted (e) {
    console.log('Mounted', this)
  },
  beforeUpdate (e) {
    console.log('beforeUpdate', this)
  },
  updated (e) {
    console.log('updated', this)
  },
  beforeDestroy (e) {
    console.log('beforeDestroy', this)
  },
  destroyed (e) {
    console.log('destroyed', this)
  },
  template: '<App/>'
})
