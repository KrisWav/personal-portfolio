<template>
  <div class="about">
    <AboutCover></AboutCover>
    <AboutGallery></AboutGallery>
    <AboutQuote></AboutQuote>
  </div>
</template>

<script>
import AboutCover from '@/components/About/AboutCover'
import AboutQuote from '@/components/About/AboutQuote'
import AboutGallery from '@/components/About/AboutGallery'
export default {
  name: 'About',
  components: { AboutGallery, AboutQuote, AboutCover }
}
</script>

<style scoped>

</style>
