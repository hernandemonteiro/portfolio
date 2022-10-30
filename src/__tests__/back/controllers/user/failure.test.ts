import { describe, it, beforeEach, afterEach } from "@jest/globals";
import UserController from "../../../../back-end/controllers/user";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import userService from "../../../../back-end/services/userService";
import sinon from "sinon";

describe("User Controllers Failure", () => {
  beforeEach(() => {
    sinon.stub(userService, "getAll").rejects(new Error("test"));
    sinon.stub(userService, "createUser").rejects(new Error("test"));
    sinon.stub(userService, "updateUser").rejects(new Error("test"));
    sinon.stub(userService, "deleteUser").rejects(new Error("test"));
  });
  afterEach(() => {
    sinon.restore();
  });
  it("getAll [failure]", async () => {
    const res = resConfig();
    await UserController.getAll({}, res);
    commonExpectsFailure(res);
  });

  it("createUser", async () => {
    const res = resConfig();
    const req = {};
    await UserController.createUser(req, res);
    commonExpectsFailure(res);
  });

  it("createUser", async () => {
    const res = resConfig();
    const req = {};
    await UserController.updateUser(req, res);
    commonExpectsFailure(res);
  });
  it("deleteUser", async () => {
    const res = resConfig();
    const req = {};
    await UserController.deleteUser(req, res);
    commonExpectsFailure(res);
  });
});
