import { createStore } from 'vuex';

import devsModule from './modules/devs/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    devs: devsModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'd4'
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
});
export default store;