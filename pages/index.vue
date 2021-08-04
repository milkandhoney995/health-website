<template>
  <div class="main">
    <div class="section"></div>
    <SectionAbout />
    <div class="section">SERVICE</div>
    <div class="section">BLOG</div>
    <div class="section">RECIPE</div>
    <div class="section">CONTACT</div>
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'

export default {
  components: {
    SectionAbout,
  },
  layout: 'default',
}
</script>
