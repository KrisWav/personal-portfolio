<template>
  <div class="home">
    <HomeCover/>
    <HomeAbout/>
    <HomeProjects/>
  </div>
</template>

<script>
import HomeCover from '@/components/Home/HomeCover'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeProjects from '@/components/Home/HomeProjects'
export default {
  name: 'Home',
  components: { HomeProjects, HomeCover, HomeAbout }
}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

</style>
