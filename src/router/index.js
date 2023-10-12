import { createRouter, createWebHistory } from 'vue-router'
import Finexo from '../views/Finexo.vue'
import Fitness from '../views/Fitness.vue'

const routes = [
  {
    path: '/',
    name: 'finexo',
    component: Finexo
  },
  {
    path: '/manage',
    name: 'fitness',
    component: Fitness
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
