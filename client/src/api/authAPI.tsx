import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route 
  try {
    const response = await fetch(
      '/auth/login/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: JSON.stringify(userInfo)
      }

    ); 
    return response;
    
    const data = await response.json();

    if(!response.ok) {
      throw new Error(data.message || 'invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error during login: ', err);
    if (err instanceof Error) {
      return Promise.reject(err.message || 'Could not log in');
    }
    return Promise.reject('Could not log in');
  }
};

export { login };