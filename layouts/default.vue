<template>
  <div>
    <Header />
    <Nuxt />
    <Overlay />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Overlay from '../components/Overlay.vue'

export default {
  components: {
    Header,
    Footer,
    Overlay,
  },
}
</script>
