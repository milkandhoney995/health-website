<template>
  <div class="section">
    <div class="center">
      <MainTitle :title="'Blog'" />
      <div class="wrapper__explanation">
        <div class="section__text">
          <Tab />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from '@/components/title/MainTitle.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: 'SectionBlog',
  components: {
    MainTitle,
    Tab,
    // Scrollbox,
  },
}
</script>
