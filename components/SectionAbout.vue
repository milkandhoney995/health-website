<template>
  <div v-scroll="changeBackgroundColor" class="section cubic-bezier__all">
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
        <div class="section__image right">
          <SectionImage />
        </div>
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
    // https://digipress.info/tech/change-background-color-by-scrolling/
    changeBackgroundColor(event, element) {
      const section = document.querySelector('.section')
      let bgColor = getComputedStyle(section).backgroundColor
      bgColor = bgColor.replace(/rgb|\(|\)/g, '')

      const hsl = this.$changeRgbToHsl(bgColor)
      if (window.scrollY > 100) {
        element.setAttribute('style', '.cubic-bezier__all')
        console.log(hsl)
      }
      return window.scrollY > 100
    },
  },
}
</script>
