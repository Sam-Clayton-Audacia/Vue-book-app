<script lang="ts">

</script>

<template>

    <head>
    <link rel="stylesheet" href="UserForm.css" />
    </head>

    <div class="banner">
        <h1><a href="Homepage.html">Academy</a></h1>
        <div class="banner-subheading"><p class="tagline">Welcome to the Academy</p></div>
    </div>

    <ul class="navbar">
        <li><a href="UserForm.html">User Form Submission</a></li>
        <li><a href="EmployeeTable.html">Employee Info</a></li>
    </ul>

    <h2 class="Heading">User Form Page</h2>


</template>

<style>
.banner {
    text-align: center;
    background-color: rgba(33, 64, 119);
}
.banner-subheading {
    text-align: center;

}
h1 a, p {
    text-decoration: none;
    text-align: center;
    color: white;
}
ul li {
    float: left;
}

ul li a {
    font-family: Arial, Helvetica, sans-serif ;
    text-decoration: none;
    display: block;
    color: white;
    float: left;
    background-color: rgba(33, 64, 119);
    padding: 10px 12px;
}

ul li a:hover {
    background-color: rgb(21, 42, 78);
}
ul {
    margin: auto;
    overflow: hidden;
    list-style-type: none;
    background-color: rgba(33, 64, 119);
}
</style>