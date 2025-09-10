import { createRouter, createWebHistory } from 'vue-router';
import login from '@/view/auth/login.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => login,
    },
  ],
});

export default router;
