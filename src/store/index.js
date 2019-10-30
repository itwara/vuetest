import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules: {
    login
  },
  state: {
    appInfo: {},
    productId: 0
  }
})
