// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router từ thư mục router

createApp(App)
  .use(router)  // Cài đặt Vue Router vào ứng dụng
  .mount('#app');  // Mount ứng dụng vào phần tử có id là 'app'
