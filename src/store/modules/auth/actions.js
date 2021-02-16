export default {
<<<<<<< HEAD
  async signup(context, payload) {
    const response = await fetch('https://dev.barbium.com/api/v1/rest-auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: payload.username,
        email: payload.emai,

=======
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
>>>>>>> main
        password: payload.password,
        returnSecureToken: true
      })
    });
<<<<<<< HEAD
    const responseData = await response.json();

    if (!response.ok)  {
      console.log(responseData);
      throw new Error('Failed to auth')
    }

    console.log(responseData);
=======

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
>>>>>>> main
  }
};