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
import gsap from 'gsap'

export default {
  name: 'AboutQuote',
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
