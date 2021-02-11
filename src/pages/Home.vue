<template>
  <div class="home">
    <HomeCover/>
  </div>
</template>

<script>
import HomeCover from '@/components/Home/HomeCover'
export default {
  name: 'Home',
  components: { HomeCover }
}
</script>

<style scoped lang="scss">
@import "../scss/main.scss";

</style>
