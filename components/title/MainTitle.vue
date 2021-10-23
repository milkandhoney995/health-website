<template>
  <div>
    <h2 style="vertical-align: middle">{{ title }}</h2>
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
