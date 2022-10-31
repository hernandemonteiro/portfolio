import { describe, it, expect } from "@jest/globals";
import { skillsRepository } from "../../../back-end/repository/skills";
import SkillService from "../../../back-end/services/skillsService";
import { sinonMongooseStubs } from "../utils/services";

describe("Skills Service", () => {
  sinonMongooseStubs(skillsRepository);

  it("getAll", async () => {
    const skills = await SkillService.getAll();
    expect(skills.status).toBe("success");
  });

  it("createSkill", async () => {
    const newSkill = {
      type: "typeofskill",
      skill: "descriptionSkill",
    };
    const skill = await SkillService.createSkill(newSkill);
    expect(skill.status).toBe("success");
  });

  it("updateSkill", async () => {
    const updateSkill = {
      _id: "id_skill",
      type: "typeofskill",
      skill: "descriptionSkill",
    };
    const skillUpdated = await SkillService.updateSkill(updateSkill);
    expect(skillUpdated.status).toBe("success");
  });

  it("deleteSkill", async () => {
    const skillDeleted = await SkillService.deleteSkill("test_id");
    expect(skillDeleted.status).toBe("success");
  });
});
