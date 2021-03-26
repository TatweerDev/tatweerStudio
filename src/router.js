import { createRouter, createWebHistory } from 'vue-router';

import DevDetails from './pages/devs/DeveloperDetails.vue';
import DevList from './pages/devs/DevelopersList.vue';
import DevRegistration from './pages/devs/DevRegistration.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import UserLogin from './pages/auth/UserLogin.vue';
import UserReset from './pages/auth/UserReset.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/devs' },
    { path: '/', component: DevList },
    { path: '/:id', component: DevDetails, props:true },
    { path: '/register', component: DevRegistration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/auth', component: UserAuth },
    { path: '/login', component: UserLogin },
    { path: '/reset', component: UserReset },
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;
