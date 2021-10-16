<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  name: 'MainTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
