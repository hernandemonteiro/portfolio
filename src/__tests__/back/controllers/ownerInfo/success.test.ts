import { describe, it, beforeEach, afterEach } from "@jest/globals";
import sinon from "sinon";
import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import OwnerInfoService from "../../../../back-end/services/ownerInfoService";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";

describe("OwnerInfo Controllers Success", () => {
  beforeEach(() => {
    sinon.stub(OwnerInfoService, "getOwnerInfo").returns({ status: "success" });
    sinon
      .stub(OwnerInfoService, "createOwnerInfo")
      .returns({ status: "success" });
    sinon
      .stub(OwnerInfoService, "updateOwnerInfo")
      .returns({ status: "success" });
    sinon
      .stub(OwnerInfoService, "deleteOwnerInfo")
      .returns({ status: "success" });
  });

  afterEach(() => sinon.restore());

  it("getOwnerInfo", async () => {
    const res = resConfig();
    await OwnerInfoController.getOwnerInfo({}, res);
    commonExpectsSuccess(res);
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
    commonExpectsSuccess(res);
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
    commonExpectsSuccess(res);
  });

  it("deleteOwnerInfo", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await OwnerInfoController.deleteOwnerInfo(req, res);
    commonExpectsSuccess(res);
  });
});
