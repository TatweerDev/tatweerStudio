export default {
  async registerDeveloper(context, data) {
    const userId = context.rootGetters.userId;
    const devData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      portfolio: data.portfolio,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(`https://tatweer-studio-default-rtdb.firebaseio.com/developers/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(devData)
    });

    // const responseData = await response.json();

    if (!response.ok) {
      //error
    }

    context.commit('registerDeveloper', {
      ...devData,
      id: userId
    });
  },
  async loadDevelopers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://tatweer-studio-default-rtdb.firebaseio.com/developers.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send');
      throw error;
    }

    const developers = [];

    for (const key in responseData) {
      const developer = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        portfolio: responseData[key].portfolio,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      developers.push(developer);
    }
    context.commit('setDevelopers', developers);
    context.commit('setFatchTimestamp');
  }
};