import { createStore } from 'vuex';

import devsModule from './modules/devs/index.js'

const store = createStore({
  modules: {
    devs: devsModule
  }
});
export default store;