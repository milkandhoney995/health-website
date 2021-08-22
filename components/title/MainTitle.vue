<template>
  <div>
    <h1>{{ title }}</h1>
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
