export default {
  async signup(context, payload) {
    const response = await fetch('https://dev.barbium.com/api/v1/rest-auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: payload.username,
        email: payload.emai,

        password: payload.password,
        returnSecureToken: true
      })
    });
    const responseData = await response.json();

    if (!response.ok)  {
      console.log(responseData);
      throw new Error('Failed to auth')
    }

    console.log(responseData);
  }
};