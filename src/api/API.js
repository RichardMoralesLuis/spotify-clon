const BASE_URL = 'https://api.spotify.com/v1/';

export const get = async (endpoint, parser) => {
  const headers = {
    'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, {
    headers,
    method: 'get'
  });

  const result = await response.json();

  if (parser) {
    return parser(result);
  }

  return result;
};
