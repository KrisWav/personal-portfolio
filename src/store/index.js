import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpenState: false,
    loaderState: true
  },
  getters: {
    getLoaderState: state => {
      return state.loaderState
    },
    getMenuState: state => {
      return state.menuOpenState
    }
  },
  mutations: {
    menuChangeState: state => {
      state.menuOpenState = !state.menuOpenState
    },
    loaderClose: state => {
      state.loaderState = false
    },
    loaderOpen: state => {
      state.loaderState = true
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
    },
    setLoaderClose: function () {
      this.commit('loaderClose')
    },
    setLoaderOpen: function () {
      this.commit('loaderOpen')
    }
  },
  modules: {
  }
})
