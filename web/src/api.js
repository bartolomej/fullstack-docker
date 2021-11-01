const API_HOST = process.env.REACT_APP_API_HOST;

if (!API_HOST) {
  console.error("REACT_APP_API_HOST env variable not set!")
}

function request(path, method = "GET") {
  return fetch(`${API_HOST}${path}`, {
    method
  }).then(res => res.json())
}

export function getRandomEmoji() {
  return request("/random");
}
