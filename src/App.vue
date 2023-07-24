<script setup>
</script>

<template>
  <nav class="bg-info">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
  </nav>
  <router-view/>
</template>