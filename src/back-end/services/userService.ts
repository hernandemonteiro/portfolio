import Crypto from "../../helpers/crypto";
import { iUser } from "../contracts/iUser";
import { userRepository } from "../repository/user";

class UserService implements iUser {
  async getAll() {
    return await userRepository.find({});
  }
  async createUser(user) {
    return await userRepository.create({
      name: user.name,
      email: await Crypto.cryptoEncrypt(user.email),
      password: await Crypto.cryptoEncrypt(user.password),
      phone: await Crypto.cryptoEncrypt(user.phone),
    });
  }
  async updateUser(userToUpdate) {
    return await userRepository.findByIdAndUpdate(userToUpdate._id, {
      name: userToUpdate.name,
      email: await Crypto.cryptoEncrypt(userToUpdate.email),
      password: await Crypto.cryptoEncrypt(userToUpdate.password),
      phone: await Crypto.cryptoEncrypt(userToUpdate.phone),
    });
  }
  async deleteUser(_id) {
    return await userRepository.findByIdAndDelete(_id);
  }
}

export default new UserService();
