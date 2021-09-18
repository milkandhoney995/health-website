<template>
  <div v-scroll="changeBackgroundColor">
    <Header />
    <Nuxt />
    <Footer />
    <div class="toTop">
      <button
        v-show="buttonActive"
        to="/"
        class="link_fade btn btn__toTop"
        @click="returnTop"
      >
        <ToTop />
      </button>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToTop from '@/components/svg/toTop'

export default {
  components: {
    Header,
    Footer,
    ToTop,
  },
  data() {
    return {
      buttonActive: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    changeBackgroundColor() {
      const scroll = window.pageYOffset
      console.log(scroll)

      if (scroll > 2000) {
        document.body.style.backgroundColor = '#f7ebef'
      } else if (scroll > 1300) {
        document.body.style.backgroundColor = '#f5ceda'
      } else if (scroll > 600) {
        document.body.style.backgroundColor = '#f5e4e9' // pink
      } else {
        document.body.style.backgroundColor = '#fce5ec'
      }
    },
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
