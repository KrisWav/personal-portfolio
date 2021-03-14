<template>
  <div class="about-gallery">
    <transition appear name="a-cover">
      <div class="about-gallery-content">
        <img class="gi1" src="~@/assets/about/gallery/portrait.jpg" alt="me">
        <img class="gi2" src="~@/assets/about/gallery/prague.jpg" alt="me">
        <img class="gi3" src="~@/assets/about/gallery/norway.jpg" alt="me">
        <img class="gi4" src="~@/assets/about/gallery/lynx.jpg" alt="me">
        <img class="gi5" src="~@/assets/about/gallery/portrait2.jpg" alt="me">
        <img class="gi6" src="~@/assets/about/gallery/mountains.jpg" alt="me">
      </div>
    </transition>
  </div>
</template>

<script>
import animations from '@/animations/gsap'

export default {
  name: 'AboutGallery',
  methods: {
    enterAnimation: (el) => {
      animations.enterFadeInY(el)
    },
    beforeEnterAnimation: (el) => {
      animations.beforeEnterFadeInY(el)
    }
  }
}
</script>

<style scoped>

</style>
