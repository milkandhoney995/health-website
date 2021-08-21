<template>
  <div>
    <SectionMain />
    <SectionAbout />
    <SectionService />
    <SectionBlog />
    <Contact />
  </div>
</template>

<script>
import SectionAbout from '@/components/SectionAbout'
import SectionService from '@/components/SectionService'
import SectionBlog from '@/components/SectionBlog'
import Contact from '@/components/Contact'
import SectionMain from '@/components/SectionMain'

export default {
  components: {
    SectionAbout,
    SectionMain,
    SectionService,
    SectionBlog,
    Contact,
  },
  layout: 'default',
}
</script>
