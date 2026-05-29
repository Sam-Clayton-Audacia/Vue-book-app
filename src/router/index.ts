import { createRouter, createWebHistory } from 'vue-router'
import Userform from '../components/userform.vue'
import EmployeeTable from '../components/employeeTable.vue'
import Homepage from '../components/homepage.vue'

const routes = [
  { path: '/home', component: Homepage },
  { path: '/user-form-submission', component: Userform },
  { path: '/employee-info', component: EmployeeTable },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
