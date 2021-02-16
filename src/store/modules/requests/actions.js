export default {
  async contactDev(context, payload) {
    const newRequest = {
      userMail: payload.email,
      message: payload.message
    };
    const response = await fetch(`https://tatweer-studio-default-rtdb.firebaseio.com/requests/${payload.developerId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to seng a message...');
      throw error
    }

    newRequest.id = responseData.name;
    newRequest.developerId = payload.developerId;

    context.commit('addRequest', newRequest);
  },
  
  async fetchRequests(context) {
    const developerId = context.rootGetters.userId;
    const response = await fetch(`https://tatweer-studio-default-rtdb.firebaseio.com/requests/${developerId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch request...');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        developerId: developerId,
        userMail: responseData[key].userMail,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
