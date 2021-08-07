import Vue from 'vue'

// 参照：https://lab.syncer.jp/Web/API_Interface/Reference/IDL/Window/scroll/
// https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
// https://fetchkun.com/entry/nuxt-custom/
// https://jp.vuejs.org/v2/cookbook/creating-custom-scroll-directives.html
// https://digipress.info/tech/change-background-color-by-scrolling/#i
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
