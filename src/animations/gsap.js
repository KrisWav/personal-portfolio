/* eslint-disable */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import props from '@/animations/props'
gsap.registerPlugin(ScrollTrigger)

function enterFadeInY(el) {
  let self = this

  this.marqueeScrollTrigger = gsap.fromTo(el, {
    y: 48,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: props().toggleActions,
      start: props().start,
      end: props().end,
      // onEnter: () => {
      //   console.log('onEnter')
      // },
      // onEnterBack: () => {
      //   console.log('onEnterBack')
      // },
      // onLeaveBack: () => {
      //   console.log('onLeaveBack')
      // },
      // onLeave: () => {
      //   console.log('onLeave')
      // }
    },
    transitionTimingFunction: props().transitionTimingFunction
  })

  setTimeout(function(){
    self.marqueeScrollTrigger.scrollTrigger.refresh()
  }, 10)
}
function enterFadeInX(el) {
  let self = el
  self.marqueeScrollTrigger = gsap.fromTo(self.$refs.inner, {
    x: -48,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: self.$refs.marquee,
      toggleActions: props().toggleActions,
      start: props().start,
      end: props().end
    },
    transitionTimingFunction: props().transitionTimingFunction
  })

  setTimeout(function(){
    self.marqueeScrollTrigger.scrollTrigger.refresh()
  }, 10)
}

export default { enterFadeInY, enterFadeInX }
