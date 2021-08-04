<template>
  <div class="section">
    <div class="center">
      <div class="section__image">
        <div class="image">
          <div class="image__profile">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <SectionTitle />
      <div class="section__text"></div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  name: 'SectionService',
  components: {
    SectionTitle,
  },
}
</script>
