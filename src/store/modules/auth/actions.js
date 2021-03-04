export default {
  async login(context, payload) {
    const response = await fetch('https://tatweer.barbium.com/auth/jwt/create/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    });
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok)  {
      console.log(responseData)
      const error = new Error(responseData.detail || 'Failed to connect with the server')
      throw error
    }

    localStorage.setItem('acceess', responseData.access);
    localStorage.setItem('refreshToken', responseData.refresh);

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.access,
      refreshToken: responseData.refresh
    });
  },
  async signup(context, payload) {
    const response = await fetch('https://tatweer.barbium.com/auth/users/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        re_password: payload.re_password,
      })
    });
    const responseData = await response.json();
    console.log(responseData)

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
  },
  tryLogin(context) {
    const token = localStorage.getItem('acceess')
    const refreshToken = localStorage.getItem('refreshToken')

    if(token && refreshToken) {
      context.commit('setUser', {
        token: token,
        refreshToken: refreshToken
      })
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      refreshToken: null
    })
  }
};
