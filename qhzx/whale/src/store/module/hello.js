import axios from 'axios'

export default{
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    updateCount (state, value) {
      state.count = value
    }
  },
  actions: {
    fetchCount ({ commit, dispatch }, param) {
      let a = 3
      console.log(a)
      axios.get('/papp/whetherLanding.do').then(function (res) {
        console.log(res)
        var data = res.data
        commit('updateCount', data.code)
      })
    }
  },
  getters: {
    doublecount (state) {
      return state.count * 2
    }
  }
}
