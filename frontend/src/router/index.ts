import Dashboard from '@/views/Dashboard.vue';
import Project from '@/views/Project.vue';
import ProjectPhrases from '@/views/ProjectPhrases.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/project/:id',
    name: 'project',
    component: Project,
  },
  {
    path: '/project/:id/:languageCode',
    name: 'project.phrases',
    component: ProjectPhrases,
  },
  {
    path: '/user',
    name: 'user',
    component: Project,
  },
  {
    path: '/user/settings',
    name: 'user.settings',
    component: Project,
  },
  {
    path: '/signout',
    name: 'user.signout',
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
