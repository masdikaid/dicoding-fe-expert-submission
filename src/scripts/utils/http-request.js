const HTTP = {
  get: async (url, params) => {
    const stringParams = params ? params.map((param) => `${param.key}=${param.value}`)
      .join('&') : '';
    const response = await fetch(url + stringParams, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseJson = await response.json();
    if (!response.ok) throw new Error(responseJson.message);

    return responseJson;
  },
  post: async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const responseJson = await response.json();

    if (!response.ok) throw new Error(responseJson.message);
    return responseJson;
  }
};

export default HTTP;
