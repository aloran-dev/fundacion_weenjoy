<template>
  <div class="media">
    <iframe
      :src="src"
      width="640"
      height="564"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
  export default {
    name: "Video",
    props: {
      src: {
        type: String,
        default: 'https://player.vimeo.com/video/279358579'
      }
    }
  }
</script>

<style lang="scss" scoped>
.media {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  height: auto;
  background: rgba(102, 102, 102, 0.5);

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>


