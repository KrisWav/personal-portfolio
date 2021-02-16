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
      if (this.getters.getMenuState === true) {
        document.body.classList.toggle('scroll-hidden')
      } else {
        document.body.classList.remove('scroll-hidden')
      }
    }
  },
  modules: {
  }
})
