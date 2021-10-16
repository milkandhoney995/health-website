<template>
  <div class="section">
    <div class="center">
      <div class="flexbox wrapper__explanation">
        <div class="section__image left width__half">
          <SectionImage :image-url="require('@/assets/images/yoga.jpg')" />
        </div>
        <div class="section__text right width__half">
          <MainTitle :title="'Service'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionImage from '@/components/SectionImage.vue'
import MainTitle from '@/components/title/MainTitle.vue'

export default {
  name: 'SectionService',
  components: {
    SectionImage,
    MainTitle,
  },
}
</script>
