<template>
  <footer>
    <div class="footer">
      <div class="center">
        <!-- <div class="toTop">
          <button
            v-show="buttonActive"
            to="/"
            class="link_fade btn btn__toTop"
            @click="returnTop"
          >
            TOP
          </button>
        </div> -->
        <div class="copyright">
          <small>© allrights reserved utano harada</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  // data() {
  //   return {
  //     buttonActive: false,
  //   }
  // },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    scrollWindow() {
      const top = 200 // ボタンを表示させたい位置
      const scroll = window.pageYOffset
      if (top <= scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    },
  },
}
</script>
