export default {
  registerDeveloper(state, payload) {
    state.developers.push(payload)
  },
  setDevelopers(state, payload) {
    state.developers = payload;
  },
  setFatchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};