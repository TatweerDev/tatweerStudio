export default {
  async registerDeveloper(context, data) {
    const userId = context.rootGetters.userId;
    const devData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      // portfolio: data.portfolio,
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
  }
};