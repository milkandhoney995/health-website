<template>
  <div class="section">
    <div class="center">
      <div class="flexbox wrapper__explanation">
        <!-- TODO: Aboutセクションで画像を右表示にする -->
        <template v-if="setImageLeft"
          ><div class="section__image left width__half">
            <SectionImage :image-url="imageUrl" />
          </div>
          <div class="section__text right width__half">
            <MainTitle :title="title" />
          </div>
        </template>
        <template v-else>
          <div class="section__image left width__half">
            <MainTitle :title="title" />
          </div>
          <div class="section__text right width__half">
            <SectionImage :image-url="imageUrl" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import SectionImage from '@/components/SectionImage.vue'
import MainTitle from '@/components/title/MainTitle.vue'

export default {
  name: 'Section',
  components: {
    SectionImage,
    MainTitle,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    imagePosition: {
      type: String,
      default: 'right',
    },
  },
  computed: {
    setImageLeft() {
      return this.imagePosition === 'left'
    },
  },
}
</script>
