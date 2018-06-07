<template>
  <div>
    <a :href="videoSrc" target="_blank">Watch the YouTube video</a>

    <!-- <iframe width="560" height="315" 
      :src="videoSrc" 
      frameborder="0" 
      allow="autoplay; encrypted-media" 
      allowfullscreen
      >
    </iframe> -->
  </div>
</template>

<script>
export default {
  props: ['src'],
  computed: {
    videoSrc () {
      return `https://www.youtube.com/watch?v=${this.src}`
    }
  }
};
</script>

<style>
</style>
