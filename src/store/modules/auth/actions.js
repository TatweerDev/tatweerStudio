export default {
  async login(context, payload) {
    const response = await fetch('https://api.barbium.com/api/v1/rest-auth/login/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        // key: true
      })
    });
    const responseData = await response.json();

    if (!response.ok)  {
      console.log(responseData)
      const error = new Error(responseData.detail || 'Failed to connect with the server')
      throw error
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.key
    });
  },
  async signup(context, payload) {
    const response = await fetch('https://api.barbium.com/api/v1/rest-auth/registration/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password1: payload.password1,
        password2: payload.password2,
      })
    });
    const responseData = await response.json();

    if (!response.ok)  {
      console.log(responseData)
      const error = new Error(
        responseData.email ||
        responseData.password ||
        responseData.detail ||
        'Failed to connect with the server'
      )
      throw error
    }

    console.log(responseData);
    context.commit('setUser', {
      userId: responseData.key
    });
  }
};
