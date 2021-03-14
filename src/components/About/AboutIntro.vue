<template>
  <div class="about-intro">
    <div class="about-intro-content mlr-main grid">
      <div class="about-intro-item">
        <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
          <div class="about-intro-item-text">
            <h3>Enjoy life while I can</h3>
            <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
            <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
          </div>
        </transition>
        <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
          <div class="about-intro-item-image">
            <img src="~@/assets/about/mountains.jpg" alt="beautiful mountains">
          </div>
        </transition>
      </div>
      <div class="about-intro-item">
        <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
          <div class="about-intro-item-text">
            <h3>Enjoy life while I can</h3>
            <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
            <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
          </div>
        </transition>
        <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
          <div class="about-intro-item-image">
            <img src="~@/assets/about/mountains.jpg" alt="">
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'AboutIntro',
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
