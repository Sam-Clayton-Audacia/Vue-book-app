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
      <li>
        <RouterLink to="/chat" class="nav-button">Chat</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 18rem;
}

.nav-button,
p {
  text-decoration: none;
  text-align: center;
  color: white;
}
ul li {
  margin: 0;
}

ul li .nav-button {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  display: block;
  color: white;
  float: left;
  padding: 10px 12px;
  border: 2px solid transparent;
}

ul li .nav-button:hover {
  background-color: rgb(21, 42, 78);
  border: 1px solid white;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navbar {
  display: flex;
  justify-content: center;
}
</style>
