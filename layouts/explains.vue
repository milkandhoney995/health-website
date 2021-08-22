<template>
  <div>
    <Header />
    <MainTitle :title="title" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MainTitle from '@/components/title/MainTitle.vue'

export default {
  name: 'Explains',
  components: {
    Header,
    Footer,
    MainTitle,
  },
  data() {
    return {
      title: '',
    }
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      // emitで発火させたイベント名にする
      this.$nuxt.$on('updateMainTitle', this.setMainTitle)
    },
    setMainTitle(title) {
      // 第1引数にはemitで渡した値が入ってくる。
      // 第2引数以降を渡す場合も同様に、それ以降の引数で受け取れる
      this.title = title || ''
    },
  },
}
</script>
