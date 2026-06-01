<script setup lang="ts">
import { ref } from 'vue'
import ChatDisplay from './chat-display.vue'
import ChatInput from './chat-input.vue'

const messages = ref<string[]>([])

const handleMessage = (message: string) => {
  messages.value.push(message)
}
</script>

<template>
  <div class="chat-container">
    <ChatDisplay :messages="messages" />
    <ChatInput @send-message="handleMessage" />
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
}
</style>
