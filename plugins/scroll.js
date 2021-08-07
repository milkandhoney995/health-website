import Vue from 'vue'

// Vue.directive('bg', {
//   bind(el, binding, vnode) {
//     el.style.backgroundColor = 'lightgreen'
//   },
// })
Vue.directive('scroll', {
  inserted(element, binding) {
    const f = function (event) {
      if (binding.value(event, element)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  },
})
