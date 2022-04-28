export const callServer = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const responseJSON = await response.json();
  return responseJSON;
};
