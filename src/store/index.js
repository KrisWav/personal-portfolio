import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router/index'

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
    menuClose: state => {
      state.menuOpenState = false
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
    routeTo: function (context, dest) {
      this.commit('loaderOpen')
      setTimeout(() => {
        Router.push(dest.link)
        this.commit('menuClose')
        document.body.classList.remove('scroll-hidden')
        setTimeout(() => {
          this.commit('loaderClose')
        }, 800)
      }, 800)
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
