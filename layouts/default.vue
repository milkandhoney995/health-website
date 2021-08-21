<template>
  <div v-scroll="changeBackgroundColor">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    changeBackgroundColor() {
      const scroll = window.pageYOffset
      console.log(scroll)

      if (scroll > 3700) {
        document.body.style.backgroundColor = '#fcfbed'
      } else if (scroll > 3000) {
        document.body.style.backgroundColor = '#f0edfc'
      } else if (scroll > 2500) {
        document.body.style.backgroundColor = '#bae3cf'
      } else if (scroll > 1800) {
        document.body.style.backgroundColor = '#fae8ca'
      } else if (scroll > 900) {
        document.body.style.backgroundColor = '#d6efff'
      } else {
        document.body.style.backgroundColor = '$clr-bodyBG'
      }
    },
  },
}
</script>
