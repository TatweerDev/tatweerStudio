export default {
  async contactDev(context, payload) {
    const newRequest = {
      userMail: payload.email,
      message: payload.message,
      userId: payload.userId
    };
    const response = await fetch(`https://tatweer.barbium.com/api/v1/message/create/`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();
    console.log(responseData)

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to seng a message...');
      throw error
    }

    newRequest.id = responseData.name;
    newRequest.userId = payload.userId;

    context.commit('addRequest', newRequest);
  },
  
  async fetchRequests(context) {
    const userId = localStorage.getItem('id')
    const response = await fetch(`https://tatweer.barbium.com/api/v1/${userId}/`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch request...');
      throw error;
    }

    const requests = responseData.user_message;

    for (const key in requests) {
      const request = {
        id: key,
        userId: requests[key].id,
        email: requests[key].email,
        message: requests[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
