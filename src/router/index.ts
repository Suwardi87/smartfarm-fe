import MainDashboard from '@/pages/dashboard/MainDashboard.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainDashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
