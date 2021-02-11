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
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: $a-wow;
  padding: 0 72px 0 72px;
  z-index: $zi-topbar;
  &-logo{
    height: 32px;
    width: 32px;
    display: block;
    background-color: $c-primary;
  }
  &-menu{
    height: 32px;
    width: 32px;
    position: fixed;
    right: 72px;
    margin-left: auto;
    transition: $a-wow;
    cursor: pointer;
    &:before, &:after{
      content: '';
      width: 100%;
      transition: $a-wow;
      position: absolute;
      height: 2px;
      display: block;
      background-color: $c-primary;
    }
    &:before{
      top: 8px;
    }
    &:after{
      bottom: 8px;
    }
    &:hover{
        &:before{
          top: 6px;
        }
        &:after{
          bottom: 6px;
        }
    }
  }
}
</style>
