<script setup lang="ts">
import HeaderNavigation from './components/headerNavigation.vue'
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <div class="my-app">
    <HeaderNavigation />
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(30, 57, 100);
}
.content-container {
  display: flex;
  flex-direction: row;
}
</style>
