export default {
  async registerDeveloper(context, data) {
    const id = localStorage.getItem('id');
    const devData = {
      first_name: data.first_name,
      last_name: data.last_name,
      descriptions: data.descriptions,
      portfolio: data.portfolio,
      hourly_rate: data.hourly_rate,
      areas: data.areas,
      is_registered: true
    };

    const response = await fetch (`https://tatweer.barbium.com/api/v1/${id}/`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(devData)
    });

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok)  {
      const error = new Error(responseData.message || 'Failed to fetch data');
      throw error;
    }

    localStorage.setItem('isRegistered', responseData.is_registered);
    context.commit('registerDeveloper', {
      ...devData,
      id: id
    });
  },
  async loadDevelopers(context) {
    const response = await fetch('https://tatweer.barbium.com/api/v1/');

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch data');
      throw error;
    }

    const developers = [];
    console.log(responseData)

    for(const key in responseData) {
      const developer = {
      id: key,
      userId: responseData[key].id,
      first_name: responseData[key].first_name,
      last_name: responseData[key].last_name,
      descriptions: responseData[key].descriptions,
      hourly_rate: responseData[key].hourly_rate,
      areas: responseData[key].areas,
      portfolio: responseData[key].portfolio,
      }
      developers.push(developer)
    }

    context.commit('setDevelopers', developers);
  }
};
