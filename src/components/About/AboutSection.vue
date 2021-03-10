<template>
  <div class="about-section about-section-white">
    <div class="about-section-content mlr-main grid">
      <div class="about-section-title">
        <h2 class="t-section-title t-purple">CAVETOWN LOVER</h2>
        <h2 class="t-section-title t-dark">MUSIC ENTHUSIAST</h2>
      </div>
      <div class="about-section-text">
        <p class="t-paragraph">Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Sed sit amet lacus metus. Donec lectus nulla, blandit nec nunc vitae, tristique gravida nisl. Maecenas convallis scelerisque arcu, eget sodales ipsum venenatis quis. Nullam pharetra nunc massa, non mollis dolor suscipit ac.</p>
        <p class="t-paragraph">Maecenas dapibus mollis mauris, vitae tempor nunc rhoncus eget. Aenean suscipit velit tempor venenatis auctor. Quisque laoreet sit amet tortor eget gravida. Aliquam vel consequat urna, eu maximus justo. Maecenas faucibus finibus nunc, sed pulvinar tellus efficitur id. Mauris hendrerit sapien nisi, quis tristique risus fermentum nec. Cras non mauris at eros pretium dignissim non id lorem.</p>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
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
