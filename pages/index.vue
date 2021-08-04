<template>
  <div class="main">
    <SectionMain />
    <SectionAbout />
    <div class="section">SERVICE</div>
    <div class="section">BLOG</div>
    <div class="section">RECIPE</div>
    <div class="section">CONTACT</div>
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
  },
  layout: 'default',
}
</script>
