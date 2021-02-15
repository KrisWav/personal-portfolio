<template>
  <div class="home-about grid mlr-main">
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
    <div class="home-about-image">
      <img src="~@/assets/home/portrait.jpg" alt="UwU that's me!">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout'
}
</script>

<style scoped>

</style>
