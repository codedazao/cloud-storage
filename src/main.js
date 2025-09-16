import '@/assets/base.css';
import '@/assets/main.css';
import '@/assets/dark.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@opentiny/vue-theme/dark-theme-index.css';

import App from './App.vue';
import router from './router';
window.isLogin = false;
tools.ipcInvoke('existsSync', 'loginData.json').then((res) => {
  console.log(res);
  if (res) {
    window.isLogin = true;
  } else {
    window.isLogin = false;
  }
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  app.mount('#app');
});
