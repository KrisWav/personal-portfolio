<template>
  <div class="menu grid">
    <div class="menu-logo"></div>
    <ul class="menu-links">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><a href="https://linktr.ee/zahumensky" target="_blank">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuOpen: Boolean
  },
  methods: {
    menuAction: () => {
      if (this.menuOpen === true) {
        this.$emit('close')
      } else {
        this.$emit('open')
      }
    }
  }
}
</script>

<style scoped>

</style>
