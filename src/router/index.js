import { createRouter, createWebHashHistory } from 'vue-router'

/** @type {import('vue-router').RouteRecordRaw[]} */
const routes = [
  {
    path: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/SystemHome.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
