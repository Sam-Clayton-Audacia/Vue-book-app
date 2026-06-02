<script setup lang="ts">
import { ref, computed } from 'vue'
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
  new Employee(
    'Daniel',
    'Hawthorne',
    'dhawthorne',
    'daniel@aud.com',
    'TBC',
    'brown',
    '104',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS2',
    '07800900205',
    '19/05/2026',
    'Associate Software Engineer',
    12,
  ),
  new Employee(
    'Sophie',
    'Ellison',
    'sellison',
    'sophie@aud.com',
    'TBC',
    'green',
    '105',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS2',
    '07800900206',
    '19/05/2026',
    'Associate Software Engineer',
    18,
  ),
  new Employee(
    'James',
    'Whitaker',
    'jwhitaker',
    'james@aud.com',
    'TBC',
    'brown',
    '106',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS3',
    '07800900207',
    '20/05/2026',
    'Associate Software Engineer',
    9,
  ),
  new Employee(
    'Emily',
    'Cartwright',
    'ecartwright',
    'emily@aud.com',
    'TBC',
    'green',
    '107',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS3',
    '07800900208',
    '20/05/2026',
    'Associate Software Engineer',
    22,
  ),
  new Employee(
    'Oliver',
    'Spencer',
    'ospencer',
    'oliver@aud.com',
    'TBC',
    'blue',
    '108',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS4',
    '07800900209',
    '21/05/2026',
    'Associate Software Engineer',
    14,
  ),
  new Employee(
    'Aisha',
    'Rahman',
    'arahman',
    'aisha@aud.com',
    'TBC',
    'green',
    '109',
    'Avenue',
    'Street',
    'Leeds',
    'Leeds',
    'LS4',
    '07800900210',
    '21/05/2026',
    'Associate Software Engineer',
    19,
  ),
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
])

const currentPage = ref(1)
const itemsPerPage = ref(5)

const totalPages = computed(() => {
  return Math.ceil(users.value.length / itemsPerPage.value)
})

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return users.value.slice(start, end)
})

const sumSalary = () => {
  let total: number = 0
  for (let i = 0; i < users.value.length; i++) {
    let salaryNum: number = Number(users.value[i]?.salary)
    total = total + salaryNum
  }
  return total
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<template>
  <body>
    <div class="table-container">
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
          <tr v-for="user in currentPageData">
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
            <td id="totalSalary" colspan="5" class="align-right">Total Salary:</td>
            <td class="align-right">{{ sumSalary() }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="pagination">
      <div class="page-buttons">
        <button @click="prevPage()">Prev</button>
        <span>Page: {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage">Next</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin: 10px 10px;
}
table,
th,
td {
  border: 2px solid;
  padding: 10px;
}

table {
  margin: 0 auto;
  padding: 10px;
  background-color: rgb(221, 233, 255);
  border: 2px solid;
  border-radius: 15px;
  display: table;
  color: rgb(0, 27, 58);
}
#totalSalary {
  text-align: right;
  border: none;
}

.pagination {
  display: flex;
  justify-content: center;
}

.page-buttons {
  background-color: rgb(26, 40, 65);
  color: white;
  border: 2px solid white;
  padding: 8px;
  border-radius: 15px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
</style>
