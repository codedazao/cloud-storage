import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import login from '@/view/auth/login.vue';
import Index from '@/view/index.vue';
import Home from '@/view/main/home.vue';
import people from '@/view/main/people.vue';
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
      children: [
        {
          path: 'home',
          component: () => Home,
        },
        {
          path: 'people',
          component: () => people,
        },
      ],
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
