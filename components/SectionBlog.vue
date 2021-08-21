<template>
  <div class="section">
    <div class="center">
      <TitleBlog />
      <div class="wrapper__explanation">
        <div class="section__text">
          <Tab />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleBlog from '@/components/title/TitleBlog.vue'
// import SectionImage from '@/components/SectionImage.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: 'SectionBlog',
  components: {
    TitleBlog,
    // SectionImage,
    Tab,
  },
}
</script>
