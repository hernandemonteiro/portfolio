import Crypto from "../../helpers/crypto";

export async function adminAccessApi(token): Promise<boolean> {
  let access;
  (await Crypto.cryptoDecrypt(token)) === process.env.CRYPTO_SECRET_ADMIN
    ? (access = true)
    : (access = false);

  return access;
}
