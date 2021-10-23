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
      :image-position="'left'"
    />
    <BlogSection />
    <Contact />
  </div>
</template>

<script>
import BlogSection from '@/components/BlogSection'
import Contact from '@/components/Contact'
import Video from '@/components/Video.vue'
import Section from '@/components/Section.vue'

export default {
  components: {
    BlogSection,
    Contact,
    Video,
    Section,
  },
  layout: 'default',
}
</script>
