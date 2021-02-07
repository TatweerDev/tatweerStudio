import mutations from './mutations.js';
import actions from './actions.js';
import getters from './gettters.js';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null
    }
  },
  mutations,
  actions,
  getters
};