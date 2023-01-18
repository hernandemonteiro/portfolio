export async function requestFormater(req) {
  return {
    body: JSON.parse(await req.body),
    headers: { "x-admin-access": await req.headers["x-admin-access"] },
  };
}
