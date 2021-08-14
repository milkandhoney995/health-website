<template>
  <div class="section">
    <div class="center">
      <TitleRecipe />
      <div class="flexbox wrapper__explanation">
        <div class="section__image left">
          <SectionImage />
        </div>
        <div class="section__text right">
          <h2>Utano Harada</h2>
          <div class="text__ja">
            レシピです。
            <br />どうぞご覧ください。
          </div>
          <div class="text__en">This is my recipe.</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TitleRecipe from '@/components/title/TitleRecipe.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionRecipe',
  components: {
    TitleRecipe,
    SectionImage,
  },
  ...mapState({
    images: (state) => state.images,
  }),
}
</script>
