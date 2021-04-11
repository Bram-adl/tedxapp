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
    },
    removeUser (state) {
      state.user = {}
    }
  },
  actions: {
    storeUser (context, user) {
      context.commit('storeUser', user)
    },
    removeUser (context) {
      context.commit('removeUser')
    }
  }
})

export default store