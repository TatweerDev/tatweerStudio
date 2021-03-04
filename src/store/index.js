import { createStore } from 'vuex';

import devsModule from './modules/devs/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js'

const store = createStore({
  modules: {
    devs: devsModule,
    requests: requestsModule,
    auth: authModule
  }
});
export default store;

