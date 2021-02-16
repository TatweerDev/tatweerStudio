import { createRouter, createWebHistory } from 'vue-router';

import DevDetails from './pages/devs/DeveloperDetails.vue'
import DevList from './pages/devs/DevelopersList.vue'
import DevRegistration from './pages/devs/DevRegistration.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/devs' },
    { path: '/devs', component: DevList },
    { path: '/devs/:id', component: DevDetails, props:true },
    { path: '/register', component: DevRegistration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;
