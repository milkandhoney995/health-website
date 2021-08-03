<template>
  <div>
    <Header />
    <Nuxt />
    <Overlay />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Overlay from '../components/Overlay.vue'
export default {
  components: {
    Header,
    Overlay,
  },
}
</script>
