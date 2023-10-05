<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
}
</script>

<template>
  <div class="callMenu" :class="{ active: isActive }" @click="toggleActive">
    <i class="line"></i>
    <i class="line"></i>
    <i class="line"></i>
  </div>
  <div class="menu rounded-3" :class="{ active: !isActive }">
    <button class="btn btn-primary rounded-0 ">
      <router-link class="text-white" to="/" @click="toggleActive">Home</router-link>
    </button>
    <button class="btn btn-primary rounded-0">
      <router-link class="text-white" to="/about" @click="toggleActive">About</router-link>
    </button>
    <button class="btn btn-primary rounded-0">
      <router-link class="text-white" to="/test" @click="toggleActive">Test</router-link>
    </button>

    <div class="btn btn-primary rounded-0 btn-group p-0" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle rounded-0" data-bs-toggle="dropdown"
        aria-expanded="false">
        Down
      </button>
      <ul class="dropdown-menu p-0 rounded-0" aria-labelledby="btnGroupDrop1">
        <li class="btn btn-primary rounded-0"><a class="p-0 text-white" href="#">link123</a></li>
        <li class="btn btn-primary rounded-0"><a class="p-0 text-white" href="#">link321</a></li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<style>
.menu {
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  max-width: 150px;
  overflow: hidden;
  z-index: 50;
}

.btn {
  width: 150px;
}

.callMenu {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
}

.callMenu .line {
  display: block;
  height: 4px;
  width: 40px;
  background: #FFF;
  box-shadow: 0 1px 6px #000;
  margin: 10px;
  opacity: 1;
  transition: all 500ms ease;
}

.callMenu.active .line {
  display: none;
}

.menu.active {
  width: 0;
}

.menu .btn .text-white {
  text-decoration: none;
}

.menu .btn .text-white:hover {
  font-weight: bold;
}

</style>
