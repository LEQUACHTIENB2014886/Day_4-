import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';  // Đảm bảo import router đúng cách

createApp(App)
  .use(router)  // Đảm bảo sử dụng router
  .mount('#app');
