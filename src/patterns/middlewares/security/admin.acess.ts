import Crypto from "../../api/crypto";
import { header } from "express-validator";

export function adminApiAccessVerify() {
  return header("x-admin-access")
    .isString()
    .withMessage("Senha para acesso é requerida!")
    .custom(async (value) => {
      const receivedToken = await Crypto.cryptoDecrypt(value);
      const secretToken = await process.env.NEXT_PUBLIC_CRYPTO_SECRET;
      if (receivedToken != secretToken) {
        throw new Error("Senha de acesso inválida");
      }
    });
}
