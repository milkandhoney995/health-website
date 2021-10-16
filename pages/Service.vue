<template>
  <div class="section cubic-bezier__all">
    <div class="center">
      <div class="flexbox wrapper__explanation">
        <div class="section__text left width__half">
          <h2>Service</h2>
          <div class="text__ja">
            【プログラミング】
            <br />HTMl, CSS：開発経験2年未満
            <br />JavaScript：開発経験半年以上1年未満
            <br />フレームワーク：Vue.js, Vuex, nuxt <br />開発環境：Git, VS
            code, ツール：AWS (CodeCommit) <br />OS：Mac
          </div>
          <div class="text__en">
            【プログラミング】
            <br />HTMl, CSS：開発経験2年未満
            <br />JavaScript：開発経験半年以上1年未満
            <br />フレームワーク：Vue.js, Vuex, nuxt <br />開発環境：Git, VS
            code, ツール：AWS (CodeCommit) <br />OS：Mac
          </div>
        </div>
        <div class="section__image right width__half">
          <SectionImage :image-url="require('@/assets/images/Church.jpeg')" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'About',
  components: {
    SectionImage,
  },
  layout: 'explains',
  data() {
    return {
      mainTitle: {
        title: 'Service',
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
