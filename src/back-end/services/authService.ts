import { iAuth } from "../contracts/iAuth";
import { userRepository } from "../repository/user";
import Crypto from "../../helpers/crypto";

export class AuthService implements iAuth {
  async login(email, password) {
    const user = userRepository.findOne({
      email: await Crypto.cryptoEncrypt(email),
      password: await Crypto.cryptoEncrypt(password),
    });
    return await Crypto.cryptoEncrypt(user);
  }
}

export default new AuthService();
