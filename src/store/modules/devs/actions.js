export default {
  registerDeveloper(context, data) {
    const devData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      portfolio: data.portfolio,
      hourlyRate: data.rate,
      areas: data.areas
    };

    context.commit('registerDeveloper', devData);
  }
};