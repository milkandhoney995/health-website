<template>
  <div>add</div>
</template>
<script>
export default {
  name: 'About',
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
