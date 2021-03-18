<template>
  <div class="about-cover mlr-main">
    <transition name="a-cover">
      <div v-if="!getLoaderState" class="about-cover-content grid">
        <div class="about-cover-title">
          <h1 class="t-about-title">ABOUT ME</h1>
        </div>
        <div class="about-cover-intro">
          <h3 class="t-about">I'm Krystof Zahumensky</h3>
          <p>Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis.</p>
          <p>Phasellus blandit odio ac volutpat rutrum. Curabitur interdum accumsan est, et ornare eros luctus non. Nulla felis orci.</p>
          <p>Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AboutCover',
  computed: {
    ...mapGetters(['getLoaderState'])
  }
}
</script>

<style scoped>

</style>
