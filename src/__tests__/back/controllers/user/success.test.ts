import { describe, it, beforeEach, afterEach } from "@jest/globals";
import UserController from "../../../../back-end/controllers/user";
import userService from "../../../../back-end/services/userService";
import { resConfig, commonExpectsSuccess } from "../../utils/controllers";
import sinon from "sinon";
describe("User Controllers Success", () => {
  beforeEach(() => {
    sinon.stub(userService, "getAll").returns({ status: "success" });
    sinon.stub(userService, "createUser").returns({ status: "success" });
    sinon.stub(userService, "updateUser").returns({ status: "success" });
    sinon.stub(userService, "deleteUser").returns({ status: "success" });
  });
  afterEach(() => {
    sinon.restore();
  });
  it("getAll", async () => {
    const res = resConfig();
    await UserController.getAll({}, res);
    commonExpectsSuccess(res);
  });

  it("createUser", async () => {
    const res = resConfig();
    const req = {
      name: "name_test",
      email: "email_test",
      password: "password_test",
      phone: "445524525",
    };
    await UserController.createUser(req, res);
    commonExpectsSuccess(res);
  });

  it("updateUser", async () => {
    const res = resConfig();
    const req = {
      _id: "id_test",
      name: "name_test",
      email: "email_test",
      password: "password_test",
      phone: "445524525",
    };
    await UserController.updateUser(req, res);
    commonExpectsSuccess(res);
  });

  it("deleteUser", async () => {
    const res = resConfig();
    const req = {
      _id: "id_test",
    };
    await UserController.deleteUser(req, res);
    commonExpectsSuccess(res);
  });
});
