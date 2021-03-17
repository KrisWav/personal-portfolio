<template>
  <div class="about" @load="neco">
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
  components: { AboutSection, AboutIntro, AboutGallery, AboutQuote, AboutCover },
  methods: {
    neco: () => {
      console.log('ahoj uwu')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log('tiktok')
      // Code that will run only after the
      // entire view has been rendered
    })
  }
}
</script>

<style scoped>

</style>
