<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ messages: string[] }>()
</script>

<template>
  <div v-for="message in messages" class="message">
    {{ message }}
  </div>
</template>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  border: color rgb(197, 209, 247);
  border-radius: 15px;
  margin-bottom: 1rem;
  padding: 8px 12px;
  width: fit-content;
  align-self: flex-end;
}
</style>
