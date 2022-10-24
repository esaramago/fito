import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'threes',
      component: () => import('./views/Threes/Threes.vue')
    }
  ]
})

export default router
