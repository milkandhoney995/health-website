<template>
  <div class="video__box">
    <div class="movie__container">
      <video class="movie" playsinline muted loop controls autoplay>
        <source src="@/assets/videos/main.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="text__box">
      <h1 class="box__title">Go in Peace</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
}
</script>
