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
    console.log(responseData)

    if (!response.ok)  {
      const error = new Error(responseData.detail || 'Failed to connect with the server')
      throw error
    }

    localStorage.setItem('access', responseData.access);
    localStorage.setItem('refreshToken', responseData.refresh);

    const response2 = await fetch('https://tatweer.barbium.com/api/v1/me/', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    const responseData2 = await response2.json();
    console.log(responseData2)
    if (!response2.ok)  {
      const error = new Error(responseData2.detail || 'Failed to connect with the server')
      throw error
    }

    console.log(responseData2)
    localStorage.setItem('id', responseData2.id);
    localStorage.setItem('isRegistered', responseData2.is_registered);
    
    context.commit('setUser', {
        token: responseData.access,
        refreshToken: responseData.refresh,
        userId: responseData2.id
      });
  },
  async signup(_, payload) {
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

    if (!response.ok)  {
      console.log(responseData)
      const error = new Error(
        responseData.email ||
        responseData.password ||
        responseData.detail ||
        responseData.message ||
        'Failed to connect with the server'
      )
      throw error
    }
  },
  tryLogin(context) {
    const token = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refreshToken');

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
      refreshToken: null,
      is_registered: null
    })
  },
  async reset(context, payload) {
    const response = await fetch('https://tatweer.barbium.com/auth/users/reset_password/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: payload.email
      })
    });

    const responseData = await response.json();

    if (!response.ok)  {
      console.log(responseData)
      const error = new Error(responseData.detail || 'Failed to connect with the server')
      throw error
    }

    console.log(responseData);
  }
};
