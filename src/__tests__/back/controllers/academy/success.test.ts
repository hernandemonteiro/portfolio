import { describe, it } from "@jest/globals";
import AcademyController from "../../../../back-end/controllers/academy";
import { academyRepository } from "../../../../back-end/repository/academy";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";
import { sinonMongooseStubs } from "../../utils/services";

describe("Academy Controllers Success", () => {
  sinonMongooseStubs(academyRepository);

  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await AcademyController.getAll(req, res);
    commonExpectsSuccess(res);
  });
  it("createAcademy", async () => {
    const res = resConfig();
    const req = {
      title: "title",
      foundation: "foundation",
      since: "since",
      status: "status",
    };
    await AcademyController.createAcademy(req, res);
    commonExpectsSuccess(res);
  });
  it("updateAcademy", async () => {
    const res = resConfig();
    const req = {
      _id: "_id",
      title: "title",
      foundation: "foundation",
      since: "since",
      status: "status",
    };
    await AcademyController.updateAcademy(req, res);
    commonExpectsSuccess(res);
  });
  it("deleteAcademy", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await AcademyController.deleteAcademy(req, res);
    commonExpectsSuccess(res);
  });
});
