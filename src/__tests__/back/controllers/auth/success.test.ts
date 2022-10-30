import { describe, it, beforeEach, afterEach } from "@jest/globals";
import sinon from "sinon";
import AuthController from "../../../../back-end/controllers/auth";
import authService from "../../../../back-end/services/authService";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";

describe("Auth controllers Success", () => {
  beforeEach(() => {
    sinon.stub(authService, "login").returns({ status: "success" });
  });

  afterEach(() => {
    sinon.restore();
  });

  it("login", async () => {
    const res = resConfig();
    const req = {
      email: "user@teste.com",
      password: "pass_test",
    };
    await AuthController.login(req, res);
    commonExpectsSuccess(res);
  });
});
