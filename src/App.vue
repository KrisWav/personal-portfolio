<template>
  <div id="app">
    <Topbar></Topbar>
    <Menu/>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Footer,
    Topbar,
    Menu
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
  background-color: $c-background;
  color: $c-secondary;
}
</style>
