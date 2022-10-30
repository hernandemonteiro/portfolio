import { describe, it, beforeEach, afterEach } from "@jest/globals";
import sinon from "sinon";
import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import OwnerInfoService from "../../../../back-end/services/ownerInfoService";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";

describe("OwnerInfo Controllers Failure", () => {
  beforeEach(() => {
    sinon.stub(OwnerInfoService, "getOwnerInfo").rejects(new Error("test"));
    sinon.stub(OwnerInfoService, "createOwnerInfo").rejects(new Error("test"));
    sinon.stub(OwnerInfoService, "updateOwnerInfo").rejects(new Error("test"));
    sinon.stub(OwnerInfoService, "deleteOwnerInfo").rejects(new Error("test"));
  });

  afterEach(() => sinon.restore());

  it("getOwnerInfo", async () => {
    const res = resConfig();
    await OwnerInfoController.getOwnerInfo({}, res);
    commonExpectsFailure(res);
  });

  it("createOwnerInfo", async () => {
    const res = resConfig();
    const req = {
      picture: "picture",
      name: "name",
      email: "email",
      birthday: "birthday",
      title: "title",
      resume: "resume",
    };
    await OwnerInfoController.createOwnerInfo(req, res);
    commonExpectsFailure(res);
  });

  it("updateOwnerInfo", async () => {
    const res = resConfig();
    const req = {
      _id: "_id",
      picture: "picture",
      name: "name",
      email: "email",
      birthday: "birthday",
      title: "title",
      resume: "resume",
    };
    await OwnerInfoController.updateOwnerInfo(req, res);
    commonExpectsFailure(res);
  });

  it("deleteOwnerInfo", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await OwnerInfoController.deleteOwnerInfo(req, res);
    commonExpectsFailure(res);
  });
});
