<template>
    <div class="home-about grid mlr-main">
      <transition appear @before-enter="beforeEnterAnimation" @enter="enterAnimation">
        <div class="home-about-content">
          <p class="t-about">
            Hi, I’m Krystof Zahumensky.<br/>
            Programmer, front-end developer, student, entrepreneur and somewhat interesting person from Hradec Kralove, Czech Republic.
          </p>
          <p class="t-about">I co-own company <a class="link-inline" target="_blank" href="https://breezyinvestments.uk"> Breezy Investments Limited</a>, based in the UK, under which I am currently working on multiple risk oriented projects.</p>
          <p class="t-about">Apart from that I love my friends and music. Cavetown and Twenty One Pilots are my most favourite artists. I’m an animal lover, piano and guitar player. Sometimes I even produce my own music.</p>
          <div class="btn-container">
            <router-link to="/about" class="btn btn-primary">More about me</router-link>
            <div class="btn-b-primary"></div>
          </div>
        </div>
      </transition>
      <transition appear @before-enter="beforeEnterAnimation" @enter="enterAnimation">
        <div class="home-about-image">
          <img src="~@/assets/home/portrait.jpg" alt="UwU that's me!">
        </div>
      </transition>
    </div>

</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomeAbout',
  methods: {
    enterAnimation: (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'restart none none reverse',
          end: 'top bottom',
          start: '64px 70%'
        },
        transitionTimingFunction: 'cubic-bezier(.07,.63,.36,.96) 2s'
      })
    },
    beforeEnterAnimation: (el) => {
      el.style.transform = 'translateY(64px)'
      el.style.opacity = 0
    }
  }
}
</script>

<style scoped>

</style>
