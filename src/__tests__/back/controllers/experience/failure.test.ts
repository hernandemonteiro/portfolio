import { describe, it } from "@jest/globals";
import ExperienceController from "../../../../back-end/controllers/experience";
import { experienceRepository } from "../../../../back-end/repository/experience";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import { sinonMongooseStubsFailure } from "../../utils/services";

describe("Experience Controllers Failure", () => {
  sinonMongooseStubsFailure(experienceRepository);
  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.getAll(req, res);
    commonExpectsFailure(res);
  });
  it("createExperience", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.createExperience(req, res);
    commonExpectsFailure(res);
  });
  it("updateExperience", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.updateExperience(req, res);
    commonExpectsFailure(res);
  });
  it("deleteExperience", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.deleteExperience(req, res);
    commonExpectsFailure(res);
  });
});
