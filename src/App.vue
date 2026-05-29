<script setup lang="ts">
import HeaderNavigation from './components/headerNavigation.vue'
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <div class="app-layout">
    <header class="header">
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
  background-color: rgb(30, 57, 100);
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

.header {
  grid-area: header;
  background: rgb(26, 40, 65);
  border-bottom: 1px solid white;
}

.sidebar {
  grid-area: sidebar;
  background: white;
  overflow-y: auto;
}

.main-content {
  grid-area: main;
  background: rgb(30, 57, 100);

  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
}
</style>
