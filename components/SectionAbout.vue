<template>
  <div class="section">
    <div class="center">
      <SectionTitle />
      <div class="flex">
        <div class="section__image">
          <div class="left">
            <div class="image__profile">
              <img class="image" src="@/assets/images/yoga.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="section__text right">
          <h2>Utano Harada</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/SectionTitle.vue'
// import Image from '@/components/Image.vue'

export default {
  name: 'SectionAbout',
  components: {
    SectionTitle,
  },
}
</script>
