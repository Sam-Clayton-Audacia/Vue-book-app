<script setup lang="ts">
import HeaderNavigation from './components/headerNavigation.vue'
import Modal from './components/modal.vue'
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <div class="app-layout">
    <div class="logo">
      <img src="./img/aud-logo.png" />
    </div>
    <header class="header">
      <div class="modal-button">
        <Modal />
      </div>
      <HeaderNavigation />
    </header>
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

body .logo {
  background-color: rgba(13, 69, 125);
}

.app-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'logo header'
    'sidebar main';
}

.logo {
  grid-area: logo;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.logo img {
  max-height: 143px;
  object-fit: contain;
}

.modal-button {
  display: flex;
  justify-content: right;
}
.header {
  grid-area: header;
  background: rgba(13, 69, 125);
}

.sidebar {
  grid-area: sidebar;
  background: rgba(13, 69, 125);
  overflow-y: auto;
}

.main-content {
  grid-area: main;
  background: rgb(23, 60, 107);

  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem;
}
</style>
