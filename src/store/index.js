import { createStore } from 'vuex';

import devsModule from './modules/devs/index.js'

const store = createStore({
  modules: {
    devs: devsModule
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