<template>
  <div class="home">
    <HomeCover/>
    <HomeAbout/>
    <HomeProjects/>
    <HomeTechstack/>
  </div>
</template>

<script>
import HomeCover from '@/components/Home/HomeCover'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeProjects from '@/components/Home/HomeProjects'
import HomeTechstack from '@/components/Home/HomeTechstack'
export default {
  name: 'Home',
  components: { HomeTechstack, HomeProjects, HomeCover, HomeAbout }
}
</script>

<style scoped lang="scss">
@import "../scss/main";

</style>
