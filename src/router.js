import { createRouter, createWebHistory } from 'vue-router';

import DevDetails from './pages/devs/DeveloperDetails.vue'
import DevList from './pages/devs/DevelopersList.vue'
import DevRegistration from './pages/devs/DevRegistration.vue'
import ContactDev from './pages/requests/ContactDev.vue'
import RequestsRecieved from './pages/requests/RequestsRecieved.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/devs' },
    { path: '/devs', component: DevList },
    { path: '/devs/:id', 
      component: DevDetails,
      props: true,
      children: [
      { path: 'contact', component: ContactDev } // /devs/d1/contact
      ] 
    },
    { path: '/register', component: DevRegistration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;
