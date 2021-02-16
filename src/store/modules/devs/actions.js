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
    const response = await fetch('https://api.barbium.com/api/v1/');

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error('Failed to get data')
    }

    const developers = [];

    for(const key in responseData) {
      const developer = {
      id: key,
      firstName: responseData[key].firstName,
      lastName: responseData[key].lastName,
      description: responseData[key].descriptions,
      hourlyRate: responseData[key].hourlyRate,
      areas: responseData[key].areas,
      portfolio: responseData[key].portfolio
      }
      developers.push(developer)
    }
    context.commit('setDevelopers', developers);
  }
};