<template>
  <div class="menu grid">
    <div class="menu-logo"></div>
    <ul class="menu-links">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><a href="https://linktr.ee/zahumensky">CONTACT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
