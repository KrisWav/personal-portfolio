<template>
  <div v-if="getMenuState" class="menu grid">
    <div class="menu-logo"></div>
    <ul class="menu-links">
      <li><router-link v-on:click.native="setMenuState()" to="/">HOME</router-link></li>
      <li><router-link v-on:click.native="setMenuState()" to="/about">ABOUT</router-link></li>
      <li><a href="https://linktr.ee/zahumensky" target="_blank">CONTACT</a></li>
    </ul>
  </div>
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
  }
}
</script>

<style scoped>

</style>
