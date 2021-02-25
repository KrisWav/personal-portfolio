<template>
  <transition name="a-loader">
    <div v-if="getLoaderState" class="loader">
      <div class="loader-logo">UwU</div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Loader',
  computed: {
    ...mapGetters(['getLoaderState'])
  }
}
</script>

<style lang="scss">
@import "src/scss/abstracts/variables";
.loader{
  height: 100%;
  z-index: $zi-loader;
  background-color: $c-background;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
