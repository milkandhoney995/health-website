<template>
  <div>
    <SectionMain />
    <SectionAbout />
    <SectionService />
    <SectionBlog />
    <div class="section">RECIPE</div>
    <div class="section">CONTACT</div>
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionService from '@/components/SectionService'
import SectionBlog from '@/components/SectionBlog'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
    SectionService,
    SectionBlog,
  },
  layout: 'default',
}
</script>
