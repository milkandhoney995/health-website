<template>
  <div>
    <SectionMain />
    <SectionAbout />
    <SectionService />
    <SectionBlog />
    <SectionRecipe />
    <div class="section">CONTACT</div>
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionService from '@/components/SectionService'
import SectionBlog from '@/components/SectionBlog'
import SectionRecipe from '@/components/SectionRecipe'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
    SectionService,
    SectionBlog,
    SectionRecipe,
  },
  layout: 'default',
}
</script>
