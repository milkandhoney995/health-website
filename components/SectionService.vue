<template>
  <div class="section">
    <div class="center">
      <TitleService />
      <div class="flexbox wrapper__explanation">
        <div class="section__image left width__half">
          <SectionImage src="@/assets/images/yoga.jpg" />
        </div>
        <div class="section__text right width__half">
          <h2>Utano Harada</h2>
          <div class="text__ja">
            毎日美味しいものを食べて、幸せになろう
            <br />仕事を楽しもう。 <br />いっぱい遊ぼう。
            <br />
          </div>
          <div class="text__en">
            Eating joyfully
            <br />Enjoy working<br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleService from '@/components/title/TitleService.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionService',
  components: {
    TitleService,
    SectionImage,
  },
  computed: {
    // image() {
    //   return this.$store.state.image[0]
    // },
  },
}
</script>
