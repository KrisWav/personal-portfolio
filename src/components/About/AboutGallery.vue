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
import gsap from 'gsap'

export default {
  name: 'AboutGallery',
  methods: {
    enterAnimation: (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'play none none none',
          start: '0px 80%'
        },
        transitionTimingFunction: 'cubic-bezier(.07,.63,.36,.96) 1.5s'
      })
    },
    beforeEnterAnimation: (el) => {
      el.style.transform = 'translateY(48px)'
      el.style.opacity = 0
    }
  }
}
</script>

<style scoped>

</style>
