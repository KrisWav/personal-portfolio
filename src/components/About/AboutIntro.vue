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
import animations from '@/animations/gsap'

export default {
  name: 'AboutIntro',
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
