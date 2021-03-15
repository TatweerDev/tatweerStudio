export default {
  developers(state) {
    return state.developers;
  },
  hasDevelopers(state) {
    return state.developers && state.developers.length > 0;
  },
  // isRegistered(_, getters, _2, rootGetters) {
  //   const developers = getters.developers;
  //   const id = rootGetters.id;
  //   return developers.some(developer => developer.id === id);
  // },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};