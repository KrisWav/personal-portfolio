<template>
  <div id="app">
    <Topbar></Topbar>
    <div class="content">
      <Home></Home>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Home from '@/pages/Home'

export default {
  name: 'App',
  components: {
    Home,
    Topbar
  }
}
</script>

<style lang="scss">
@import "scss/main.scss";
#app {
  font-family: 'Sarabun', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 0px;
  background-color: $c-background;
  color: $c-secondary;
}
</style>
