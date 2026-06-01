/* There should be an input component which provides a form where you can submit a message, which
should use emits to another component which displays a list of messages. Think in terms of
Facebook/Instagram messages where you have a text box and messages above. Some stylings to show the
current users messages differently. This can all be achieved via an Array and an input component,
the step after that would be refactor, removing the emit and using a pinia store instead */

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['sendMessage'])

const inputText = ref('')

const handleSendMessage = () => {
  emit('sendMessage', inputText.value)
  inputText.value = ''
}
</script>

<template>
  <div class="chat-input">
    <input
      v-model="inputText"
      placeholder="Enter your message here..."
      @keydown.enter="handleSendMessage()"
    />
    <button @click="handleSendMessage()">Send</button>
  </div>
</template>

<style scoped></style>
