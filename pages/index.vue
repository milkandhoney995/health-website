<template>
  <div>
    <SectionMain />
    <SectionAbout />
    <SectionService />
    <SectionBlog />
    <SectionRecipe />
    <Contact />
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionService from '@/components/SectionService'
import SectionBlog from '@/components/SectionBlog'
import SectionRecipe from '@/components/SectionRecipe'
import Contact from '@/components/Contact'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
    SectionService,
    SectionBlog,
    SectionRecipe,
    Contact,
  },
  layout: 'default',
}
</script>
