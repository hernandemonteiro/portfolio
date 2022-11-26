import Crypto from "./crypto";
export async function fetchAPI(route, method) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL_API}${route}`, {
    method: method,
  }).then((res) => res.json());
}

export async function fetchAdminAPI(route, method) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL_API}${route}`, {
    method: method,
    headers: {
      "x-admin-access": await tokenAPI(),
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log("error: " + e));
}

export async function tokenAPI() {
  const token = process.env.NEXT_PUBLIC_CRYPTO_SECRET;
  return await Crypto.cryptoEncrypt(token);
}
