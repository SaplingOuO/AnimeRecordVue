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
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<style>
.body{
  background-color: #81C7D4;
  background-image: url(/public/texture.png);
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
