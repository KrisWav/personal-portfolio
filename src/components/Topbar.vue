<template>
  <div class="topbar">
    <a class="topbar-logo"></a>
    <div class="topbar-menu"></div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.topbar{
  top: 72px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: $zi-topbar;
  &-logo{
    height: 32px;
    width: 32px;
  }
  &-menu{
    ::before, ::after{
      width: 32px;
      height: 2px;
      background-color: $c-primary;
    }
  }
}
</style>