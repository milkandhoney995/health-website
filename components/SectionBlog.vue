<template>
  <div class="section">
    <div class="center">
      <TitleBlog />
      <div class="flexbox wrapper__explanation">
        <div class="section__text left">
          <h2>Utano Harada</h2>
          <div class="text__ja">ブログです。</div>
          <div class="text__en">This is my blog.</div>
        </div>
        <SectionImage />
      </div>
    </div>
  </div>
</template>
<script>
import TitleBlog from '@/components/title/TitleBlog.vue'
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'SectionBlog',
  components: {
    TitleBlog,
    SectionImage,
  },
}
</script>
