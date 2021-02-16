import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpenState: false
  },
  getters: {
    getMenuState: state => {
      return state.menuOpenState
    }
  },
  mutations: {
    menuChangeState: state => {
      state.menuOpenState = !state.menuOpenState
    }
  },
  actions: {
    setMenuState: function () {
      this.commit('menuChangeState')
      console.log('menu state changed')
    }
  },
  modules: {
  }
})
