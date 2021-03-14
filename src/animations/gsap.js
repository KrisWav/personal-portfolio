/* eslint-disable */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import props from '@/animations/props'
gsap.registerPlugin(ScrollTrigger)

function beforeEnterFadeInY (el) {
  el.style.transform = props().styleTransformY
  el.style.opacity = 0
}
function enterFadeInY(el) {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: el,
      toggleActions: props().toggleActions,
      start: props().start,
      end: props().end,
      onEnter: () => {
        console.log('onEnter')
      },
      onEnterBack: () => {
        console.log('onEnterBack')
      },
      onLeaveBack: () => {
        console.log('onLeaveBack')
      },
      onLeave: () => {
        console.log('onLeave')
      }
    },
    transitionTimingFunction: props().transitionTimingFunction
  })
}
function enterFadeInX(el) {
  gsap.to(el, {
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
function beforeEnterFadeInX(el) {
  el.style.transform = props().styleTransformX
  el.style.opacity = 0
}

export default { enterFadeInY, beforeEnterFadeInY, enterFadeInX, beforeEnterFadeInX }
