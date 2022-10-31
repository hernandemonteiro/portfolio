import { describe, it } from "@jest/globals";
import AcademyController from "../../../../back-end/controllers/academy";
import { academyRepository } from "../../../../back-end/repository/academy";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import { sinonMongooseStubsFailure } from "../../utils/services";

describe("Academy Controllers Failure", () => {
  sinonMongooseStubsFailure(academyRepository);

  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await AcademyController.getAll(req, res);
    commonExpectsFailure(res);
  });
  it("createAcademy", async () => {
    const res = resConfig();
    const req = {};
    await AcademyController.createAcademy(req, res);
    commonExpectsFailure(res);
  });
  it("updateAcademy", async () => {
    const res = resConfig();
    const req = {};
    await AcademyController.updateAcademy(req, res);
    commonExpectsFailure(res);
  });
  it("deleteAcademy", async () => {
    const res = resConfig();
    const req = {};
    await AcademyController.deleteAcademy(req, res);
    commonExpectsFailure(res);
  });
});
