<script>
import HomeViewSlide from '@/components/HomeView/HomeViewSlide.vue'

export default {
  components: {
    HomeViewSlide
  }
}
</script>

<template>
  <div class="body vh-100">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeViewSlide/>
  </div>
</template>

<style>
.body{
  background-image: url(/public/texture.png);
  background-color: #000000;
}
</style>
