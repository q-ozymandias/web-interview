import { API_ENDPOINT } from '../config'

async function request(endpoint, method, data) {
  const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  /**
   * I added error response Objects and am throwing an Error if something goes wrong,
   * but this can definitely be handled better.
   */
  if (!response.ok) {
    if (response.status >= 500) {
      return {
        error: {
          isServerError: true,
          isUserError: false,
        },
      };
    }
    if (response.status >= 400 && response.status < 500) {
      return {
        error: {
          isServerError: false,
          isUserError: true,
        },
      };
    }
    throw Error(response.statusText);
  }
  if (response.status !== 204) {
    return response.json();
  } else {
    return null;
  }
}

export default request;
