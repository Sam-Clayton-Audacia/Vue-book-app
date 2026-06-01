<script setup lang="ts">
import Loader from '../components/loader.vue'
</script>

<template>
  <div class="image-container">
    <h2>There is no content to see here.</h2>
    <img src="../img/Screenshot 2026-05-28 171557.png" />
    <Loader />
  </div>
</template>

<style scoped>
h2 {
  color: white;
  text-align: center;
  margin: 0;
  padding: 0;
}

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-container img {
  padding: 2rem;
}
</style>
