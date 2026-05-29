<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    <ul>
      <li>
        <RouterLink to="/home" class="nav-button">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/user-form-submission" class="nav-button">User Form Submission</RouterLink>
      </li>
      <li>
        <RouterLink to="/employee-info" class="nav-button">Employee Info</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.sidebar {
  min-height: 100%;
  width: 18rem;
  background-color: #f1f1f1;
}
</style>
