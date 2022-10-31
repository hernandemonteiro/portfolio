import { describe, it, expect } from "@jest/globals";
import { experienceRepository } from "../../../back-end/repository/experience";
import ExperienceService from "../../../back-end/services/experienceService";
import { sinonMongooseStubs } from "../utils/services";

describe("Experience Services", () => {
  sinonMongooseStubs(experienceRepository);

  it("getAll", async () => {
    const experience = await ExperienceService.getAll();
    expect(experience.status).toBe("success");
  });

  it("createExperience", async () => {
    const experience = {
      title: "title",
      company: "company",
      since: "since",
      until: "until",
    };
    const newExperience = await ExperienceService.createExperience(experience);
    expect(newExperience.status).toBe("success");
  });

  it("updateExperience", async () => {
    const experience = {
      _id: "id",
      title: "title",
      company: "company",
      since: "since",
      until: "until",
    };
    const updatedExperience = await ExperienceService.updateExperience(
      experience
    );
    expect(updatedExperience.status).toBe("success");
  });

  it("deleteExperience", async () => {
    const deletedExperience = await ExperienceService.deleteExperience(
      "test_id"
    );
    expect(deletedExperience.status).toBe("success");
  });
});
