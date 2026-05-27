<script setup lang="ts">
import { ref } from 'vue'

let formData = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  dob: '',
  eyeColour: '',
  address1: '',
  address2: '',
  address3: '',
  cityTown: '',
  county: '',
  postcode: '',
  phoneNo: '',
})

const handleSubmit = () => {
  alert(
    `First Name: ${formData.value.firstName}
    Last Name: ${formData.value.lastName}
    Username: ${formData.value.username}
    Email: ${formData.value.email}
    Date of Birth: ${formData.value.dob}
    Eye Colour: ${formData.value.eyeColour}
    Address Line 1: ${formData.value.address1}
    Address Line 2: ${formData.value.address2}
    Address Line 3: ${formData.value.address3}
    City / Town: ${formData.value.cityTown}
    County: ${formData.value.county}
    Postcode: ${formData.value.postcode}
    Phone Number: ${formData.value.phoneNo}`,
  )
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="subheader">Personal Info:</h2>
    <p>
      <label>First Name</label>
      <input v-model="formData.firstName" type="text" />
    </p>
    <p>
      <label>Last Name</label>
      <input v-model="formData.lastName" type="text" />
    </p>

    <p>
      <label>Username</label>
      <input v-model="formData.username" type="text" />
    </p>
    <p>
      <label>Email</label>
      <input v-model="formData.email" type="email" />
    </p>

    <p>
      <label>Date of Birth</label>
      <input v-model="formData.dob" type="date" />
    </p>

    <p>
      <label>Eye Colour</label>
      <select v-model="formData.eyeColour">
        <option>Blue</option>
        <option>Green</option>
        <option>Brown</option>
        <option>Grey</option>
        <option>Purple</option>
        <option>Rainbow</option>
      </select>
    </p>

    <br />

    <h2 class="subheader">Address:</h2>

    <p>
      <label>Address Line 1</label>
      <input v-model="formData.address1" type="text" />
    </p>

    <p>
      <label>Address Line 2</label>
      <input v-model="formData.address2" type="text" />
    </p>

    <p>
      <label>Address Line 3</label>
      <input v-model="formData.address3" type="text" />
    </p>

    <p>
      <label>City / Town</label>
      <input v-model="formData.cityTown" type="text" />
    </p>

    <p>
      <label>County</label>
      <input v-model="formData.county" type="text" />
    </p>

    <p>
      <label>Postcode</label>
      <input v-model="formData.postcode" type="text" />
    </p>
    <p>
      <label>Phone Number</label>
      <input v-model="formData.phoneNo" type="number" />
    </p>

    <div class="container">
      <button type="submit" class="green-background">Submit</button>
    </div>
  </form>
</template>

<style>
form .subheader {
  text-align: center;
  color: white;
}

body {
  text-align: center;
}

form {
  margin: 0 auto;
  padding: 10px;
  background-color: rgba(33, 64, 119);
  display: table;
}

form p {
  display: table-row;
}

label {
  display: table-cell;
  margin-left: 8%;
  margin-right: 5px;
  color: white;
}

input {
  display: table-cell;
}

.align-right {
  text-align: right;
}

tfoot {
  text-align: right;
}
</style>
