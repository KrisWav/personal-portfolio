<template>
  <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
    <div class="about-quote grid mlr-main">
      <div class="about-quote-content">
        <p class="about-quote-text">“Aliquam pretium, turpis ac congue feugiat, risus urna volutpat diam, in faucibus libero elit elementum mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.”</p>
        <span class="about-quote-author">- Someone really smart</span>
      </div>
    </div>
  </transition>
</template>

<script>
import animations from '@/animations/gsap'

export default {
  name: 'AboutQuote',
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
