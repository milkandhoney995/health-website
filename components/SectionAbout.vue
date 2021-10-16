<template>
  <div class="section cubic-bezier__all">
    <div class="center">
      <div class="flexbox wrapper__explanation">
        <div class="section__text left width__half">
          <MainTitle :title="'About'" />
        </div>
        <div class="section__image right width__half">
          <SectionImage :image-url="require('@/assets/images/Church.jpeg')" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from '@/components/title/MainTitle.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionAbout',
  components: {
    SectionImage,
    MainTitle,
  },
  // data() {
  //   return {
  //     image: '@/assets/images/Church.jpeg',
  //   }
  // },
}
</script>
