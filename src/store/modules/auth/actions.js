export default {
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-RR9N-YGuOD6jaUxIxbB3gaRUGLm7Rsc', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    
    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(response.message || 'Failed to authentificate.');
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })

  },
  async signup(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-RR9N-YGuOD6jaUxIxbB3gaRUGLm7Rsc', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(response.message || 'Failed to authentificate.');
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  }
};