<template>
  <div class="hero">
    <div class="video__container">
      <video class="movie" playsinline muted loop autoplay>
        <source src="@/assets/videos/main.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="text__box">
      <h1 class="box__title"></h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
}
</script>
<style lang="scss" scoped>
.hero {
  position: relative;
}
</style>
