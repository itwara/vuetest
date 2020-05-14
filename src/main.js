// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
debugger
/* eslint-disable no-new */
new Vue({
  // el: document.getElementById('app'),
  el: '#app',
  router,
  store,
  components: { App },
  data: {
    name: 'vue 实例化'
  },
  computed: {
    aliasName () {
      return this.name + 18
    }
  },
  watch: {
    age (newVal) {
      console.log('watch', newVal)
    }
  },
  methods: {
    setName (name) {
      this.name = name
    }
  },
  beforeCreate (e) {
    // // 初始化 event 和 钩子
    // console.log('beforeCreate: this.$options', this.$options)
    // console.log('beforeCreate: this._events', this._events)
    // console.log('beforeCreate: this', this)

    // // 数据未观测 (data observer) 和 event/watcher 事件未配置
    // console.log('beforeCreate: data: ', this.name)
    // console.log('beforeCreate: computed: ', this.aliasName)
    // console.log('beforeCreate: methods: ', this.setName)
    // console.log('beforeCreate: this._watchers', this._watchers)
  },
  created (e) {
    // // $el 未创建
    // console.log('created: this.$el', this.$el)

    // // 数据观测 (data observer) 和 event/watcher 事件已完毕
    // console.log('created: data: ', this.name)
    // console.log('created: computed: ', this.aliasName)
    // console.log('created: methods: ', this.setName)
    // console.log('created: this._watchers', this._watchers)

    // // all
    // console.log('created', this)
  },
  beforeMount (e) {
    // console.log('beforeMount', this)
  },
  mounted (e) {
    // console.log('Mounted', this)
  },
  beforeUpdate (e) {
    // console.log('beforeUpdate', this)
  },
  updated (e) {
    // console.log('updated', this)
  },
  beforeDestroy (e) {
    // console.log('beforeDestroy', this)
  },
  destroyed (e) {
    // console.log('destroyed', this)
  },
  template: '<App/>'
})
