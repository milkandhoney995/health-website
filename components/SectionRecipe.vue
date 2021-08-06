<template>
  <div class="section">
    <div class="center">
      <div class="section__image">
        <div class="image__wrap">
          <img :src="$store.state.images" alt="" />
        </div>
      </div>
      <TitleAbout />
      <div class="section__text right">
        <h2>Utano Harada</h2>
        <div class="text__ja">
          1997年千葉県松戸市生まれ
          <br />国際基督教大学教養学部アーツ・サイエンス学科化学専攻卒。
          <br />在学中にLEGO MINDSTROME
          EV3で実験用ロボットを制作したことがきっかけで、プログラミングに目覚める。
          <br />現在はフロントエンドエンジニアとして働く傍ら、Institute for
          Integrative NutritionのHolistic Health Coachの資格取得のために勉強中。
        </div>
        <div class="text__en">
          Born in 1997, Matsudo in Chiba.
          <br />Alumnai of International Christian University, in the college of
          Liberal Arts. <br />在学中にLEGO MINDSTROME
          EV3で実験用ロボットを制作したことがきっかけで、プログラミングに目覚める。
          <br />現在はフロントエンドエンジニアとして働く傍ら、Institute for
          Integrative NutritionのHolistic Health Coachの資格取得のために勉強中。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TitleAbout from '@/components/title/TitleAbout.vue'

export default {
  name: 'SectionRecipe',
  components: {
    TitleAbout,
  },
  ...mapState({
    images: (state) => state.images,
  }),
}
</script>
