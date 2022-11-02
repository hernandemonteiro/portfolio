import Crypto from "../../helpers/crypto";

export async function adminAccessApi(token): Promise<boolean> {
  let access;
  (await Crypto.cryptoDecrypt(token)) === process.env.NEXT_PUBLIC_CRYPTO_SECRET
    ? (access = true)
    : (access = false);

  return access;
}
