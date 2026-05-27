<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  {
    firstName: 'Sam',
    surname: 'Clayton',
    dob: '13/09/1992',
    startDate: '18/05/2026',
    role: 'Associate Software Engineer',
    salary: '1.50',
  },
  {
    firstName: 'Jake',
    surname: 'Roberts',
    dob: 'TBC',
    startDate: '18/05/2026',
    role: 'Associate Software Engineer',
    salary: '3.50',
  },
  {
    firstName: 'Ciaran',
    surname: 'Dennison',
    dob: 'TBC',
    startDate: '18/05/2026',
    role: 'Associate Software Engineer',
    salary: '5.50',
  },
  {
    firstName: 'Kelsey',
    surname: 'Callington',
    dob: 'TBC',
    startDate: '18/05/2026',
    role: 'Associate Software Engineer',
    salary: '6',
  },
  {
    firstName: 'Magdalena',
    surname: 'Janeckova',
    dob: 'TBC',
    startDate: '18/05/2026',
    role: 'Associate Software Engineer',
    salary: '10',
  },
])

function sumSalary() {
  let total: number = 0
  for (let i = 0; i < users.value.length; i++) {
    let salaryNum: number = Number(users.value[i]?.salary)
    total = total + salaryNum
  }
  return total
}

// let salarySum: number =
</script>

<template>
  <div class="table-container">
    <h2>Employees</h2>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Start Date</th>
          <th>Role</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            <input type="text" v-model="user.firstName" />
          </td>
          <td>
            <input type="text" v-model="user.surname" />
          </td>
          <td>
            <input type="text" v-model="user.dob" />
          </td>
          <td>
            <input type="text" v-model="user.startDate" />
          </td>
          <td>
            <input type="text" v-model="user.role" />
          </td>
          <td>
            <input type="text" v-model="user.salary" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="align-right">Total Salary:</td>
          <td class="align-right">{{ sumSalary() }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script></script>
