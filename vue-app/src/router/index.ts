import { createRouter, createWebHistory } from 'vue-router'
import {LOGIN_PATH} from "@/modules/login/constants/route.constants";
import {isNotAuthenticatedGuard} from "@/modules/login/guards/is-not-authenticated/is-not-authenticated.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMaths(.*)*',
      name: 'page-not-found',
      component: () => import('../views/PageNotFoundView.vue')
    },
    {
      path: LOGIN_PATH,
      name: 'login',
      component: () => import('@/modules/login/views/LoginPage.vue'),
      beforeEnter: isNotAuthenticatedGuard
    },
  ]
})

export default router
