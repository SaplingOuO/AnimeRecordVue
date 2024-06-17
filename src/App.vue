<script>
import AppMenu from "@/components/App/AppMenu.vue"
export default {
  components: {
    AppMenu
  }
}
</script>

<template>
  <div class="">
    <AppMenu />
    <router-view />
  </div>
</template>
