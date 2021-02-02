export default {
  contactDev(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      userMail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', newRequest);
  }
};
