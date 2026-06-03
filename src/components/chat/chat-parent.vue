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
  justify-content: center;
  min-width: 600px;
  min-height: 600px;
  background-color: rgb(21, 42, 78);
  border: 2px solid white;
}
</style>
