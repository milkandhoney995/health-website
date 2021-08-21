<template>
  <div>
    <div class="section mainVideo">
      <Video />
    </div>
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
import Video from '@/components/Video.vue'

export default {
  components: {
    SectionAbout,
    SectionService,
    SectionBlog,
    Contact,
    Video,
  },
  layout: 'default',
}
</script>
