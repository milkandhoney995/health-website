<template>
  <div class="image__wrap">
    <img class="image" :src="imageUrl" alt="" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionImage',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    ...mapState({
      images: (state) => state.images,
    }),
  },
}
</script>
