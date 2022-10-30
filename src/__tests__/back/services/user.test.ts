import { describe, it, expect, jest } from "@jest/globals";
import { userRepository } from "../../../back-end/repository/user";
import userService from "../../../back-end/services/userService";
import Crypto from "../../../helpers/crypto";
import { sinonMongooseStubs } from "../utils/services";

jest.mock("../../../helpers/crypto");

describe("User Services", () => {
  sinonMongooseStubs(userRepository);
  it("getAll", async () => {
    const user = await userService.getAll();
    expect(user.status).toBe("success");
  });

  it("createUser", async () => {
    jest.mocked(Crypto.cryptoEncrypt).mockResolvedValue("success crypto");
    const userToRegister = {
      name: "name_test",
      email: "email_test",
      password: "password_test",
      phone: "phone_test",
    };
    const user = await userService.createUser(userToRegister);
    expect(user.status).toBe("success");
  });

  it("updateUser", async () => {
    jest.mocked(Crypto.cryptoEncrypt).mockResolvedValue("success crypto");
    const userToUpdate = {
      _id: "test_id",
      name: "name_test",
      email: "email_test",
      password: "password_test",
      phone: "phone_test",
    };
    const user = await userService.updateUser(userToUpdate);
    expect(user.status).toBe("success");
  });

  it("deleteUser", async () => {
    const userDeleted = await userService.deleteUser("id_test");
    expect(userDeleted.status).toBe("success");
  });
});
