<template>
  <div>
    <Header />
    <h1>RECIPE</h1>
    <Nuxt />
    <Overlay />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Overlay from '@/components/Overlay'

export default {
  components: {
    Header,
    Overlay,
  },
}
</script>
