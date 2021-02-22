import Vue from 'vue'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin)

new Vue({
  gsap,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
