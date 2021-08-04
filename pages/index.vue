<template>
  <div>
    <SectionMain />
    <SectionAbout />
    <SectionService />
    <div class="section">BLOG</div>
    <div class="section">RECIPE</div>
    <div class="section">CONTACT</div>
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionService from '@/components/SectionService'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
    SectionService,
  },
  layout: 'default',
}
</script>
