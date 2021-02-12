<template>
  <div id="app">
    <Topbar></Topbar>
    <Menu/>
    <div class="content">
      <Home></Home>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Home from '@/pages/Home'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    Footer,
    Home,
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
  top: 0px;
  background-color: $c-background;
  color: $c-secondary;
}
</style>
