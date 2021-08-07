<template>
  <div v-scroll="handleScroll" class="section cubic-bezier__all">
    <div class="center">
      <TitleAbout />
      <div class="flexbox wrapper__explanation">
        <div class="section__text left">
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
            of Liberal Arts. <br />在学中にLEGO MINDSTROME
            EV3で実験用ロボットを制作したことがきっかけで、プログラミングに目覚める。
            <br />現在はフロントエンドエンジニアとして働く傍ら、Institute for
            Integrative NutritionのHolistic Health
            Coachの資格取得のために勉強中。
          </div>
        </div>
        <SectionImage />
      </div>
    </div>
  </div>
</template>
<script>
import TitleAbout from '@/components/title/TitleAbout.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionAbout',
  components: {
    TitleAbout,
    SectionImage,
  },
  methods: {
    handleScroll(event, element) {
      if (window.scrollY > 50) {
        element.setAttribute(
          'style',
          'transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);'
        )
      }
      return window.scrollY > 100
    },
  },
}
</script>
