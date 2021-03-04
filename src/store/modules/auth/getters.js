export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  refreshToken(state) {
    return state.refreshToken;
  },
  isAthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};