<template>
  <div class="about">
    <AboutCover></AboutCover>
    <AboutQuote></AboutQuote>
  </div>
</template>

<script>
import AboutCover from '@/components/About/AboutCover'
import AboutQuote from '@/components/About/AboutQuote'
export default {
  name: 'About',
  components: { AboutQuote, AboutCover }
}
</script>

<style scoped>

</style>
