<template>
  <transition appear name="a-menu">
    <div v-if="getMenuState" class="menu grid">
      <div class="menu-logo"></div>
      <transition-group
        appear
        @enter="linksEnter"
        @before-enter="linksBeforeEnter"
        tag="ul" class="menu-links" >
        <li v-for="(link, index) in menuLinks" :key="link.name" :data-index="index">
          <!---<router-link v-if="link.routerLink" :to="link.to" @click.native="setMenuState()">{{link.name}}</router-link>-->
          <a v-if="link.routerLink" style="cursor: pointer;" @click="menuLinkClick(link.to)">{{link.name}}</a>
          <a v-else :href="link.to" target="_blank" @click="setMenuState()">{{link.name}}</a>
        </li>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import gsap from 'gsap'
import store from '../store/index'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters(['getMenuState'])
  },
  methods: {
    ...mapActions(['setMenuState', 'routeTo']),
    linksEnter: (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        animationTimingFunction: 'cubic-bezier(.07,.63,.36,.96)',
        onComplete: done,
        delay: el.dataset.index * 0.15
      })
    },
    linksBeforeEnter: (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateX(48px)'
    },
    menuLinkClick: (link) => {
      // store.dispatch('setMenuState')
      store.dispatch('routeTo', { link })
    }
  },
  data: () => {
    return {
      menuLinks: [
        {
          routerLink: true,
          to: '/',
          name: 'HOME'
        },
        {
          routerLink: true,
          to: 'about',
          name: 'ABOUT'
        },
        {
          routerLink: false,
          to: 'https://linktr.ee/zahumensky',
          name: 'CONTACT'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
