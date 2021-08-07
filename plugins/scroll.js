import Vue from 'vue'

// debug
Vue.directive('bg', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'lightgreen'
  },
})
