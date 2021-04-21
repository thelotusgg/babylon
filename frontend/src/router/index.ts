import Dashboard from '@/views/Dashboard.vue';
import Project from '@/views/Project.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/project/',
    name: 'project',
    component: Project,
  },
  {
    path: '/user',
    name: 'user',
    component: Project,
    children: [
      {
        path: 'settings',
        name: 'user.settings',
        component: Project,
      },
      {
        path: '/signout',
        name: 'user.signout',
        component: Project,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
