/* eslint-disable */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import props from '@/animations/props'
gsap.registerPlugin(ScrollTrigger)

function enterFadeInY(el) {
  gsap.fromTo(el, {
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
}
function enterFadeInX(el) {
  gsap.fromTo(el, {
    x: -48,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: props().toggleActions,
      start: props().start,
      end: props().end
    },
    transitionTimingFunction: props().transitionTimingFunction
  })
}

export default { enterFadeInY, enterFadeInX }
