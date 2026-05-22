import { createRouter, createWebHistory } from 'vue-router'

import home from '../pages/home.vue'
import projects from '../pages/projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router