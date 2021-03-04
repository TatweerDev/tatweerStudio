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
    const response = await fetch ('https://dev.barbium.com/api/v1/id.json', {
      method: 'POST',
      body: JSON.stringify(devData)
    });

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok)  {
      // error...
    }

    context.commit('registerDeveloper', {
      ...devData,
      id: userId
    });
  },
  async loadDevelopers(context) {
    const response = await fetch('https://tatweer.barbium.com/api/v1/');

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch data');
      throw error;
    }

    const developers = [];

    for(const key in responseData) {
      const developer = {
      id: key,
      firstName: responseData[key].first_name,
      lastName: responseData[key].last_name,
      description: responseData[key].descriptions,
      hourlyRate: responseData[key].hourly_rate,
      areas: responseData[key].areas,
      portfolio: responseData[key].portfolio
      }
      console.log(developer)
      developers.push(developer)
    }
    console.log()
    context.commit('setDevelopers', developers);
  }
};
