import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMaths(.*)*',
      name: 'page-not-found',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

export default router
