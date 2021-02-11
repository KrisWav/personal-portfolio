<template>
  <div class="topbar">
    <a class="topbar-logo"></a>
    <div class="topbar-menu"></div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.topbar{
  top: 72px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 72px 0 72px;
  z-index: $zi-topbar;
  &-logo{
    height: 32px;
    width: 32px;
  }
  &-menu{
    ::before, ::after{
      width: 32px;
      height: 2px;
      position: relative;
      display: block;
      background-color: $c-primary;
    }
    ::before{
      top: 6px;
    }
    ::after{
      bottom: 6px;
    }
  }
}
</style>
