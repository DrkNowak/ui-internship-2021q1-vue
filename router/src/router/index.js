import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { display: true }
  },
  {
    path: '/role-management',
    name: 'Role Management',
    component: () => import('@/views/RoleManagement'),
    meta: { display: true }
  },
  {
    path: '/user-management',
    name: 'User Management',
    component: () => import('@/views/UserManagement'),
    meta: { display: false }
  },
  {
    path: '/team-management',
    name: 'Team Management',
    component: () => import('@/views/TeamManagement'),
    meta: { display: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  to.matched.some((record) => record.meta.display) ? next() : next('/');
});

export default router;
