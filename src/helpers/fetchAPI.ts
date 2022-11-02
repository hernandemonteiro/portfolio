import Crypto from "./crypto";
export async function fetchAPI(route, method) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL_API}${route}`, {
    method: method,
  }).then((res) => res.json());
}

export async function fetchAdminAPI(route, method) {
  const token = await process.env.NEXT_PUBLIC_CRYPTO_SECRET;
  const acessToken = await Crypto.cryptoEncrypt(token);
  return await fetch(`${process.env.NEXT_PUBLIC_URL_API}${route}`, {
    method: method,
    headers: {
      "x-admin-access": acessToken,
    },
  })
    .then(async (res) => res.json())
    .catch((e) => console.log("error: " + e));
}
