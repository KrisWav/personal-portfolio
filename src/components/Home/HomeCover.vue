<template>
    <div class="home-cover">
      <transition name="a-cover">
        <div v-if="!getLoaderState" class="home-cover-content grid mlr-main">
          <div class="home-cover-content-inner">
            <h1 class="t-title">KRYSTOF<br/>ZAHUMENSKY</h1>
            <h2 class="t-subtitle">Programming student and entrepreneur based in Czech Republic.</h2>
            <p class="t-desc">Moje krasny vyflexeny moto, po kterym se kazdymu bude motat hlava.</p>
            <a class="btn btn-link" href="https://linktr.ee/zahumensky" target="_blank">Let's get in touch!</a>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeCover',
  computed: {
    ...mapGetters(['getLoaderState'])
  }
}
</script>

<style scoped>

</style>
