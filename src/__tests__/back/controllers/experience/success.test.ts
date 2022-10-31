import { describe, it } from "@jest/globals";
import ExperienceController from "../../../../back-end/controllers/experience";
import { experienceRepository } from "../../../../back-end/repository/experience";
import { resConfig } from "../../utils/controllers";
import { sinonMongooseStubs } from "../../utils/services";

describe("Experience Controllers Success", () => {
  sinonMongooseStubs(experienceRepository);
  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.getAll(req, res);
  });
  it("createExperience", async () => {
    const res = resConfig();
    const req = {
      title: "title",
      company: "company",
      since: "since",
      until: "until",
    };
    await ExperienceController.createExperience(req, res);
  });
  it("updateExperience", async () => {
    const res = resConfig();
    const req = {
      _id: "_id",
      title: "title",
      company: "company",
      since: "since",
      until: "until",
    };
    await ExperienceController.updateExperience(req, res);
  });
  it("deleteExperience", async () => {
    const res = resConfig();
    const req = {};
    await ExperienceController.deleteExperience(req, res);
  });
});
