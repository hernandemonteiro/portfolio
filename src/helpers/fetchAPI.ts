export async function fetchAPI(route, method) {
  return await fetch(`http://localhost:3000${route}`, {
    method: method,
  }).then((res) => res.json());
}
