<script lang="ts"></script>

<template>
  <nav>
    <div class="banner">
      <h1><RouterLink to="/home" class="nav-button">Academy</RouterLink></h1>
    </div>

    <ul class="navbar">
      <li>
        <RouterLink to="/user-form-submission" class="nav-button">User Form Submission</RouterLink>
      </li>
      <li>
        <RouterLink to="/employee-info" class="nav-button">Employee Info</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.banner {
  width: 100%;
  background-color: rgb(26, 40, 65);
  text-align: center;
  padding: 10px 0;
}
.banner-subheading {
  text-align: center;
}
h1 .nav-button,
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
  justify-content: center;
  background-color: rgb(26, 40, 65);
  border-bottom: 1px solid white;
  border-top: 1px solid white;
}

.navbar {
  display: flex;
  justify-content: center;
}
</style>
