<template>
  <div class="home-projects mlr-main">
    <transition appear @enter="animationEnter" @before-enter="animationBeforeEnter">
      <div class="home-project">
        <div class="home-project-image">
          <a href="https://rollsafely.com">
            <img class="home-project-image-desktop" src="~@/assets/home/projects/afm-desktop.jpg" alt="This is Rollsafely!">
            <img class="home-project-image-phone" src="~@/assets/home/projects/afm.jpg" alt="This is Rollsafely!">
          </a>
        </div>
        <div class="home-project-info">
          <h3 class="home-project-info-title">Rollsafely</h3>
          <div class="home-project-info-caption">Drug harm reduction</div>
          <div class="home-project-info-desc">Rollsafely is a brand of drug identification and purity test kits. The safest way to take drugs is to not take them at all.</div>
        </div>
      </div>
    </transition>
    <transition appear @enter="animationEnter" @before-enter="animationBeforeEnter">
      <div class="home-project">
        <div class="home-project-image">
          <a href="https://askfirst.me">
            <img class="home-project-image-desktop" src="~@/assets/home/projects/afm-desktop.jpg" alt="This is Rollsafely!">
            <img class="home-project-image-phone" src="~@/assets/home/projects/afm.jpg" alt="This is Rollsafely!">
          </a>
        </div>
        <div class="home-project-info">
          <h3 class="home-project-info-title">Ask Me First</h3>
          <div class="home-project-info-caption">Social media platform launchpad</div>
          <div class="home-project-info-desc">Alternative social media launchpad and QNA app.</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomeProjects',
  methods: {
    animationEnter: (el) => {
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
    animationBeforeEnter: (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(64px)'
    }
  }
}
</script>

<style scoped>

</style>
