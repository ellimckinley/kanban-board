import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route 
  try {
    const response = await fetch(
      '/api/users/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(userInfo)
      }

    )
    const data = await response.json();

    if(!response.ok) {
      throw new Error(data.message || 'invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Work Creation: ', err);
    if (err instanceof Error) {
      return Promise.reject(err.message || 'Could not create new work');
    }
    return Promise.reject('Could not create new work');
  }
};

export { login };