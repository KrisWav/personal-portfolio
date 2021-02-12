<template>
  <div class="home">
    <HomeCover/>
    <HomeAbout/>
  </div>
</template>

<script>
import HomeCover from '@/components/Home/HomeCover'
import HomeAbout from '@/components/Home/HomeAbout'
export default {
  name: 'Home',
  components: { HomeCover, HomeAbout }
}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

</style>
