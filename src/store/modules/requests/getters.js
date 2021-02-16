export default {
  requests(state, _, _2, rootGetters) {
    const developerId = rootGetters.userId;
    return state.requests.filter(req => req.developerId === developerId);
  },
  hasRequsets(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
