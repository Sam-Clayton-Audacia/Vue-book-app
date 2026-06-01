<script setup lang="ts">
import { ref } from 'vue'
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <button @click="openModal()">Do not click...</button>

  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal()">
    <div class="modal">
      <h2>You have been ambushed by a gang of cats!!</h2>
      <img src="../img/cat-gang.jpg" />
      <button class="close-button" @click="closeModal()">Run away!</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: rgba(200, 0, 0, 0.7);
}

.modal {
  text-align: center;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
}

.modal button {
  height: 4rem;
  background-color: black;
  color: white;
  border: none;
  font-size: 125%;
}
</style>
