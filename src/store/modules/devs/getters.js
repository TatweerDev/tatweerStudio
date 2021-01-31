export default {
  developers(state) {
    return state.developers;
  },
  hasDevelopers(state) {
    return state.developers && state.developers.length > 0;
  },
  isDev(_, getters, _2, rootGetters) {
    const developers = getters.developers;
    const userId = rootGetters.userId;
    return developers.some(developer => developer.id === userId);
  }
};