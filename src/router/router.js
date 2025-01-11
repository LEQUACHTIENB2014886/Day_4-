import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Products from '../views/Products.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/products', component: Products },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
