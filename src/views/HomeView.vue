<script>
import HVanimatedText from '@/components/HomeView/HVanimatedText.vue';
export default {
  components: {
    HVanimatedText,
  }
}
</script>

<template>
  <div class="body vh-100">
    <HVanimatedText class="position-absolute top-50 start-50 translate-middle"/>
  </div>
</template>

<style>
.body{
  background-image: url(/public/texture.png);
  background-color: rgba(103, 255, 204, 0.5);
}
</style>
