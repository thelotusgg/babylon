import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';
import Project from '@/views/Project.vue';
import ProjectIndex from '@/views/project/Index.vue';
import ProjectLanguage from '@/views/project/Language.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category,
  },
  {
    path: '/project/:id',
    component: Project,
    children: [
      {
        path: '',
        name: 'project',
        component: ProjectIndex,
      },
      {
        path: ':languageCode',
        name: 'project.language',
        component: ProjectLanguage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
