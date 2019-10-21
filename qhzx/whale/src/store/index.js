import Vue from 'vue'
import Vuex from 'vuex'
import hello from './module/hello'
import home from './module/home'
import {page} from './module/page'
import * as process from './module/process'
import variable from './module/variable'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hello: hello,
    home: home,
    page: page,
    process: process,
    variable: variable
  },
  state: {
    count: 10
  }
})
