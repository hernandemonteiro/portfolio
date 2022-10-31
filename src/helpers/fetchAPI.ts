export async function fetchAPI(route, method) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL_API}${route}`, {
    method: method,
  }).then((res) => res.json());
}
