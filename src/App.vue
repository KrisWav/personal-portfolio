/* eslint-disable */
<template>
  <div id="app">
    <Loader/>
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
import Loader from '@/components/Loader'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Loader,
    Footer,
    Topbar,
    Menu
  },
  methods: {
    ...mapActions(['setLoaderClose', 'setLoaderOpen', 'routeTo'])
  },
  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          this.setLoaderClose()
        }, 500)
      }
    }
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
