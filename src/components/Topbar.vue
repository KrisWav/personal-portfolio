<template>
  <div class="topbar">
    <a class="topbar-logo"></a>
    <div class="topbar-menu" :class="{'topbar-menu-opened' : getMenuState}" @click="setMenuState()"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Topbar',
  computed: {
    ...mapGetters(['getMenuState'])
  },
  methods: {
    ...mapActions(['setMenuState'])
  }
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
  transition: $a-attack;
  padding: 0 72px 0 72px;
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
    z-index: $zi-topbar;
    margin-left: auto;
    transition: $a-attack;
    cursor: pointer;
    &-opened{
      &:before{
        transform: translateY(7px);
      }
      &:after{
        transform: translateY(-7px);
      }
      &:hover{
        &:before{
          transform: translateY(7px) !important;
        }
        &:after{
          transform: translateY(-7px) !important;
        }
      }
    }
    &:before, &:after{
      content: '';
      width: 100%;
      transition: $a-attack;
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
        transform: translateY(-3px);
      }
      &:after{
        transform: translateY(3px);
      }
    }
  }
}
@media screen and(max-width: $bp-tablet){
  .topbar{
    padding: 0px 32px;
    top: 32px;
    &-logo{
      width: 24px;
      height: 24px;
    }
    &-menu{
      right: 32px;
      width: 24px;
      height: 24px;
      &:before{
        top: 6px;
      }
      &:after{
        bottom: 6px;
      }
      &:hover{
        &:after, &:before{
          transform: translate(0) !important;
        }
      }
      &-opened{
        &:before{
          transform: translateY(5px) !important;
        }
        &:after{
          transform: translateY(-5px) !important;
        }
        &:hover{
          &:before{
            transform: translateY(5px) !important;
          }
          &:after{
            transform: translateY(-5px) !important;
          }
        }
      }
    }
  }
}
</style>
