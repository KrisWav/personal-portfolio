<template>
  <div class="footer">
    <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
      <div class="footer-content grid mlr-main">
        <div class="footer-content-inner">
          <div class="footer-content-inner-title">
            <div class="t-title">DON'T BE SHY.</div>
            <div class="t-title t-secondary">I DON'T BITE.</div>
          </div>
          <div class="footer-content-inner-desc t-desc">Contact me on Twitter, Instagram or simply email. I’d love to talk about anything - from development and tech to music. Also, did I mention Cavetown?</div>
          <a class="btn btn-link" href="https://linktr.ee/zahumensky" target="_blank">Let's get in touch!</a>
        </div>
        <div class="footer-content-links">
          <div class="footer-content-links-group">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </div>
          <div class="footer-content-links-group" style="margin: 24px 0;">
            <a href="https://rollsafely.com">Rollsafely</a>
            <a href="https://askfirst.me">AskMeFirst</a>
          </div>
          <div class="footer-content-links-group">
            <a href="https://mail.zahumensky.me">Email</a>
            <a href="https://twitter.com/krystofza">Twitter</a>
            <a href="https://www.instagram.com/krystof_uwu/">Instagram</a>
            <a href="https://github.com/BrOwOken">Github</a>
            <a href="https://linktr.ee/zahumensky">Linktree</a>
          </div>
        </div>
        <div class="footer-content-copyright">Made with love and lots of coffee in Hradec Kralove, Czech Republic.</div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Footer',
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
