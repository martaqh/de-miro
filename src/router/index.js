import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue'),
  },
  {
    path: '/choice-1',
    name: 'Choice1',
    component: () => import('../components/Choice1.vue'),
  },
  {
    path: '/choice-2',
    name: 'Choice2',
    component: () => import('../components/Choice2.vue'),
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
