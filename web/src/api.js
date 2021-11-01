const API_HOST = process.env.API_HOST || 'http://localhost:3000';

function request(path, method = "GET") {
  return fetch(`${API_HOST}${path}`, {
    method
  }).then(res => res.json())
}

export function getRandomEmoji() {
  return request("/random");
}
