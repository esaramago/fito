import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trees',
      component: () => import('./views/Trees/Trees.vue')
    }
  ]
})

export default router
