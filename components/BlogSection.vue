<template>
  <div class="section">
    <div class="center">
      <MainTitle :title="'Blog'" />
      <div class="wrapper__explanation">
        <div class="section__text">
          <Tabs />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from '@/components/title/MainTitle.vue'
import Tabs from '@/components/Tabs.vue'

export default {
  name: 'SectionBlog',
  components: {
    MainTitle,
    Tabs,
    // Scrollbox,
  },
}
</script>
