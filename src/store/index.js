import { createStore } from 'vuex';

import devsModule from './modules/devs/index.js';
import requestsModule from './modules/requests/index.js';
<<<<<<< HEAD
import authModule from './modules/auth/index.js'

=======
import authModule from './modules/auth/index.js';
>>>>>>> main

const store = createStore({
  modules: {
    devs: devsModule,
    requests: requestsModule,
    auth: authModule
  }
  // state() {
  //   return {
  //     userId: 'd4'
  //   }
  // }
  // getters: {
  //   userId(state) {
  //     return state.userId
  //   }
  // }
});
export default store;