<template>
  <div class="section cubic-bezier__all">
    <div class="center">
      <div class="flexbox wrapper__explanation">
        <div class="section__text left width__half">
          <h2>Utano Harada</h2>
          <div class="text__ja">
            1997年千葉県松戸市生まれ
            <br />国際基督教大学教養学部アーツ・サイエンス学科化学専攻卒。
            <br />在学中にLEGO MINDSTROME
            EV3で実験用ロボットを制作したことがきっかけで、プログラミングに目覚める。
            <br />現在はフロントエンドエンジニアとして働く傍ら、Institute for
            Integrative NutritionのHolistic Health
            Coachの資格取得のために勉強中。
          </div>
          <div class="text__en">
            Born in 1997, Matsudo in Chiba.
            <br />Alumnai of International Christian University, in the college
            of Liberal Arts. <br />I graduated from International Christian
            University, Mitaka, in Tokyo. I majored in chemistry, and studied
            philosophy and religion, law, environmental studies, and peace
            studies.

            <br />在学中にLEGO MINDSTROME
            EV3で実験用ロボットを制作したことがきっかけで、プログラミングに目覚める。
            <br />現在はフロントエンドエンジニアとして働く傍ら、Institute for
            Integrative NutritionのHolistic Health
            Coachの資格取得のために勉強中。
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
  layout: 'detail',
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
