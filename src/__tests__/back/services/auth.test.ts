import {
  describe,
  it,
  beforeEach,
  afterEach,
  jest,
  expect,
} from "@jest/globals";
import authService from "../../../back-end/services/authService";
import sinon from "sinon";
import { userRepository } from "../../../back-end/repository/user";
import Crypto from "../../../helpers/crypto";
jest.mock("../../../helpers/crypto");
describe("Auth Services", () => {
  beforeEach(() => {
    sinon.stub(userRepository, "findOne").returns("success");
  });

  afterEach(() => sinon.restore());

  it("login", async () => {
    jest.mocked(Crypto.cryptoEncrypt).mockResolvedValue("success");
    const logged = await authService.login("email@teste.com", "senha_teste");
    expect(logged).toBe("success");
  });
});
