import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import store from 'vuex'

Vue.use(VueRouter)

const routes = (store) => [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Krystof Zahumensky',
      metaTags: [
        {
          name: 'description',
          content: '18 y.o. programmer, web developer, designer and entrepreneur from the Czech Republic.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Krystof'
    }
  }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes(store)
})

export default router
