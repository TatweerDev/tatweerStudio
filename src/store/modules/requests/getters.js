export default {
  requests(state) {
    return state.requests;
  },
  hasRequsets(state) {
    return state.requests && state.requests.length > 0;
  }
};