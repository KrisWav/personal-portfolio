<template>
  <div class="about">
    <AboutCover></AboutCover>
    <AboutGallery></AboutGallery>
    <AboutQuote></AboutQuote>
    <AboutIntro></AboutIntro>
    <AboutSection></AboutSection>
  </div>
</template>

<script>
import AboutCover from '@/components/About/AboutCover'
import AboutQuote from '@/components/About/AboutQuote'
import AboutGallery from '@/components/About/AboutGallery'
import AboutIntro from '@/components/About/AboutIntro'
import AboutSection from '@/components/About/AboutSection'
export default {
  name: 'About',
  components: { AboutSection, AboutIntro, AboutGallery, AboutQuote, AboutCover }
}
</script>

<style scoped>

</style>
