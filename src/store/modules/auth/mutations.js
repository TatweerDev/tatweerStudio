export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.email = payload.email;
    state.refreshToken = payload.refreshToken;
    state.is_registered = payload.is_registered;
    // state.didAutoLogout = false;
  }
  // setAutoLogout(state) {
  //   state.didAutoLogout = true;
  // }
};