<template>
  <transition name="a-menu">
    <div v-if="getMenuState" class="menu grid">
      <div class="menu-logo"></div>
      <transition-group @enter="linkEnter()" name="a-menu-links" tag="ul" class="menu-links">
        <li v-for="(link, index) in menuLinks" :key="link.name" :data-index="index">
          <router-link v-if="link.routerLink" :to="link.to" @click.native="setMenuState()">{{link.name}}</router-link>
          <a v-else :href="link.to" target="_blank" @click="setMenuState()">{{link.name}}</a>
        </li>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters(['getMenuState'])
  },
  methods: {
    ...mapActions(['setMenuState'])
    // linkEnter: (el) => {
    //   setTimeout(function (el) {
    //     el.dataset.index
    //   }, (5000 + el.dataset.index * 2000))
    // }
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
          to: '/about',
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
