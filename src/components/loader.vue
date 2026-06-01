<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)

const setLoadingFalse = () => {
  isLoading.value = false
}

const setLoadingTrue = () => {
  isLoading.value = true
}

const fakeLoadTime = () => {
  setLoadingTrue()
  setTimeout(() => {
    setLoadingFalse()
  }, 2000)
}
</script>

<template>
  <button @click="fakeLoadTime">Load Animation Test</button>
  <div v-if="isLoading" class="loader">
    <img src="../img/cat-face-spin-removebg.png" />
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
}

.loader img {
  width: 100%;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
