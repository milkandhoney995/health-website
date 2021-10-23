<template>
  <div>
    <div class="mainVideo">
      <Video />
    </div>
    <Section
      :title="'About'"
      :image-url="require('@/assets/images/Church.jpeg')"
    />
    <Section
      :title="'Service'"
      :image-url="require('@/assets/images/yoga.jpg')"
    />
    <SectionBlog />
    <Contact />
  </div>
</template>

<script>
import SectionBlog from '@/components/SectionBlog'
import Contact from '@/components/Contact'
import Video from '@/components/Video.vue'
import Section from '@/components/Section.vue'

export default {
  components: {
    SectionBlog,
    Contact,
    Video,
    Section,
  },
  layout: 'default',
}
</script>
