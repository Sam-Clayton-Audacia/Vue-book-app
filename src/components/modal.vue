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

  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal">
      <h2>You have been ambushed by a gang of cats!!</h2>
      <img src="../img/cat-gang.jpg" />
      <button class="close-button" @click="closeModal()">Click here to run away!</button>
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
@media (min-width: 600px) {
}

@media (max-width: 600px) {
}
.modal {
  text-align: center;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 80%;
  height: 600px;
  max-height: 80%;
}

.modal img {
  width: 100%;
  flex: 1;
  min-height: 0;
  object-fit: contain;
  margin-bottom: 1rem;
}

.modal button {
  height: 4rem;
  background-color: rgb(14, 133, 50);
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 125%;
  margin-bottom: 1rem;
}
</style>
