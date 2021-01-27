import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/devs' },
    { path: '/devs', component: null },
    { path: '/devs/:id', component: null, children:[
      { path: 'contact', component: null } // /devs/d1/contact
    ] },
    { path: '/register', component: null },
    { path: '/requests', component: null },
    { path: '/:notFound(.*)', component: null },
  ]
});

export default router;
