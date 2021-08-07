<template>
  <div class="section">
    <div class="center">
      <TitleAbout />
      <div class="flexbox wrapper__explanation">
        <SectionImage />
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
import TitleAbout from '@/components/title/TitleAbout.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionRecipe',
  components: {
    TitleAbout,
    SectionImage,
  },
  ...mapState({
    images: (state) => state.images,
  }),
}
</script>
