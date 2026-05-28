<script setup lang="ts">
import { ref } from 'vue'
import { Employee } from '../classes/employee'

const users = ref([
  new Employee(
    'Sam',
    'Clayton',
    'sclayton',
    'sam@aud.com',
    '13/09/1992',
    'blue',
    '99',
    'Avenue',
    'Street',
    'Withington',
    'Manchester',
    'M20',
    '07800900200',
    '18/05/2026',
    'Associate Software Engineer',
    5,
  ),
  new Employee(
    'Jake',
    'Roberts',
    'jroberts',
    'jake@aud.com',
    'TBC',
    'green',
    '100',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS1',
    '07800900201',
    '18/05/2026',
    'Associate Software Engineer',
    7,
  ),
  new Employee(
    'Ciaran',
    'Dennison',
    'cdennison',
    'ciaran@aud.com',
    'TBC',
    'green',
    '101',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS1',
    '07800900202',
    '18/05/2026',
    'Associate Software Engineer',
    10,
  ),
  new Employee(
    'Kelsey',
    'Callington',
    'kcallington',
    'kelsey@aud.com',
    'TBC',
    'green',
    '102',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS1',
    '07800900203',
    '18/05/2026',
    'Associate Software Engineer',
    15,
  ),
  new Employee(
    'Magdalena',
    'Janeckova',
    'mjaneckova',
    'magda@aud.com',
    'TBC',
    'green',
    '103',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS1',
    '07800900204',
    '18/05/2026',
    'Associate Software Engineer',
    20,
  ),
])

function sumSalary() {
  let total: number = 0
  for (let i = 0; i < users.value.length; i++) {
    let salaryNum: number = Number(users.value[i]?.salary)
    total = total + salaryNum
  }
  return total
}
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
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.dob }}</td>
          <td>{{ user.startDate }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.salary }}</td>
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
