import { createRouter, createWebHistory } from 'vue-router';
import Glasses from '../views/Glasses.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Glasses,
    },
    {
      path: '/',
      component: Glasses,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue'),
    },
  ],
});

export default router;
