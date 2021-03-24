import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Welcome/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
