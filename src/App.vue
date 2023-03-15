<script setup lang="ts">
// import Counter from "./components/counter/index.vue"
</script>

<template>
  <!-- <router-link to="/home">首页</router-link> -->
  <!-- <router-link to="/about">关于</router-link> -->
  <!-- <Counter></Counter> -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
