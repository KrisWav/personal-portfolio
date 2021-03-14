<template>
  <div class="about-section about-section-white">
    <div class="about-section-content mlr-main grid">
      <transition appear @enter="enterLeftAnimation" @before-enter="beforeEnterLeftAnimation">
        <div class="about-section-title">
          <h2 class="t-section-title t-purple">CAVETOWN LOVER</h2>
          <h2 class="t-section-title t-dark">MUSIC ENTHUSIAST</h2>
        </div>
      </transition>
      <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
        <div class="about-section-text">
          <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
          <p class="t-paragraph">Maecenas dapibus mollis mauris, vitae tempor nunc rhoncus eget. Aenean suscipit velit tempor venenatis auctor. Quisque laoreet sit amet tortor eget gravida. Aliquam vel consequat urna, eu maximus justo. Maecenas faucibus finibus nunc, sed pulvinar tellus efficitur id. Mauris hendrerit sapien nisi, quis tristique risus fermentum nec. Cras non mauris at eros pretium dignissim non id lorem.</p>
        </div>
      </transition>
      <transition appear @enter="enterAnimation" @before-enter="beforeEnterAnimation">
        <div class="about-section-albums grid">
          <div class="about-section-albums-title">These will always have a special place in my heart...</div>
          <div class="about-section-albums-content">
            <div v-for="album in albums" :key="album.name" class="album">
              <img :src="require('../../assets/about/albums/' + album.image)" :alt="album.name">
              <a class="album-inner" :href="album.link" target="_blank">
                <div class="album-inner-year">{{ album.year }}</div>
                <div class="album-inner-artist">{{ album.artist }}</div>
                <div class="album-inner-name">{{ album.name }}</div>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'AboutSection',
  methods: {
    enterLeftAnimation: (el) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'play none none none',
          start: '0px 80%'
        },
        transitionTimingFunction: 'cubic-bezier(.07,.63,.36,.96) 1.5s'
      })
    },
    beforeEnterLeftAnimation: (el) => {
      el.style.transform = 'translateX(-48px)'
      el.style.opacity = 0
    },
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
  },
  data: () => {
    return {
      albums: [
        {
          artist: 'Twenty One Pilots',
          name: 'Vessel',
          year: 2013,
          image: 'vessel.jpg',
          link: 'https://open.spotify.com/album/2r2r78NE05YjyHyVbVgqFn?si=csWi6rWAT3u_VOs7KT8iBw'
        },
        {
          artist: 'Cavetown',
          name: 'Lemon Boy',
          year: 2018,
          image: 'lemonboy.jpg',
          link: 'https://open.spotify.com/album/5rvA7Pth9X8PFp5jHqFl3V?si=GEz5UGcURauYP46perujkQ'
        },
        {
          artist: 'Daughter',
          name: 'If You Leave',
          year: 2013,
          image: 'ifyouleave.jpg',
          link: 'https://open.spotify.com/album/74ShfU6i2GfPyqwdc5uGl7?si=eTLLWJqjRpiSE4lWwaOLLg'
        },
        {
          artist: 'Bring Me The Horizon',
          name: 'Sempiternal',
          year: 2013,
          image: 'sempiternal.jpg',
          link: 'https://open.spotify.com/album/6IYPmM3xsOPL2XPSvf1ZAz?si=jaOIgBv_TC-gnbRpHpEkMw'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
