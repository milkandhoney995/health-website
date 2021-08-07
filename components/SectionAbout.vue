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
        element.setAttribute('style', '.cubic-bezier__all')
      }
      return window.scrollY > 100
    },
    // switch:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch
    // RGBをHSLに変換する方法:https://lab.syncer.jp/Web/JavaScript/Snippet/68/
    // RGBからHSLに変換する関数
    changeRgbToHsl(rgb) {
      const r = rgb[0] / 255
      const g = rgb[1] / 255
      const b = rgb[2] / 255

      const min = Math.min(r, g, b)
      const max = Math.max(r, g, b)
      const diff = max - min
      let h = 0
      const l = (max + min) / 2
      const s = diff / (1 - Math.abs(max + min - 1))
      switch (min) {
        case max:
          h = 0
          break

        case r:
          h = 60 * ((b - g) / diff) + 180
          break

        case g:
          h = 60 * ((r - b) / diff) + 300
          break

        case b:
          h = 60 * ((g - r) / diff) + 60
          break
      }

      return [h, s, l]
    },
  },
}
</script>
