<template>
  <div class="image__wrap">
    <img class="image" src="@/assets/images/yoga.jpg" alt="" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionImage',
  props: {
    image: {
      type: String,
      default: '',
    },
    ...mapState({
      images: (state) => state.images,
    }),
  },
}
</script>
