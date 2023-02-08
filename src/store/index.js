import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    updateUserInfo(state, payload) {
        state.user = payload
     }
  },
  actions: {
    setUserInfo({ commit }, payload) {
        commit('updateUserInfo', payload)
    }
  },
  modules: {}
})

export default store
