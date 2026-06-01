<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ messages: string[] }>()
</script>

<template>
  <div v-for="message in messages" class="message-display">
    {{ message }}
  </div>
</template>

<style scoped>
.message-display {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
}
</style>
