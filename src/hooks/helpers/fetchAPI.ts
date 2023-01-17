import Crypto from "./crypto";
export async function fetchAPI(route, method, body?) {
  return await fetch(
    `${route}`,
    body
      ? {
          method: method,
          headers: {
            "x-admin-access": await tokenAPI(),
          },
          body: JSON.stringify(body),
        }
      : {
          method: method,
        }
  ).then((res) => res.json());
}

export async function fetchAdminAPI(route, method, body?) {
  return await fetch(
    `${route}`,
    body
      ? {
          method: method,
          headers: {
            "x-admin-access": await tokenAPI(),
          },
          body: JSON.stringify(body),
        }
      : {
          method: method,
        }
  ).then((res) => res.json());
}

export async function tokenAPI() {
  const token = process.env.NEXT_PUBLIC_CRYPTO_SECRET;
  return await Crypto.cryptoEncrypt(token);
}
