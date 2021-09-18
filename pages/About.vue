<template>
  <div>
    <Scrollbox />
  </div>
</template>
<script>
import Scrollbox from '@/components/ScrollBox.vue'

export default {
  name: 'About',
  components: {
    Scrollbox,
  },
  layout: 'explains',
  data() {
    return {
      mainTitle: {
        title: 'About',
      },
    }
  },
  mounted() {
    this.updateMainTitle()
  },
  methods: {
    updateMainTitle() {
      // タイトルとして使いたい情報を渡す
      this.$nuxt.$emit('updateMainTitle', this.mainTitle.title)
    },
  },
}
</script>
