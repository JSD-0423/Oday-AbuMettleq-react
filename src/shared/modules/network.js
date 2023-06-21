let sendRequest = async (url, method) => {
  try {
    const response = await fetch(url, {
      method: method,
    });
    console.log(response);
    return response.json();
  } catch (error) {
    return null;
  }
};
export { sendRequest };
