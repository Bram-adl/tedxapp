import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    storeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    storeUser (context, user) {
      context.commit('storeUser', user)
    }
  }
})

export default store