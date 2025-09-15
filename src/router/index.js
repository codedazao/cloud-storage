import { createRouter, createWebHistory } from 'vue-router';
import login from '@/view/auth/login.vue';
import Index from '@/view/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      component: () => login,
    },
    {
      path: '/index',
      component: () => Index,
    },
  ],
});
//配置路由拦截器
router.beforeEach((to, from) => {
  if (to.path !== '/auth/login' && !window.isLogin) {
    return router.replace('/auth/login');
  }
});
export default router;
