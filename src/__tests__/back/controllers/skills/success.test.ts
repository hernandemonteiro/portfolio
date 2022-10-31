import { describe, it, beforeEach, afterEach } from "@jest/globals";
import SkillController from "../../../../back-end/controllers/skills";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";
import { sinonMongooseStubs } from "../../utils/services";
import { skillsRepository } from "../../../../back-end/repository/skills";

describe("Skills Controllers", () => {
  sinonMongooseStubs(skillsRepository);
  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await SkillController.getAll(req, res);
    commonExpectsSuccess(res);
  });

  it("createSkill", async () => {
    const res = resConfig();
    const req = {
      type: "type",
      skill: "skill",
    };
    await SkillController.createSkill(req, res);
    commonExpectsSuccess(res);
  });

  it("updateSkill", async () => {
    const res = resConfig();
    const req = {
      _id: "_id",
      type: "type",
      skill: "skill",
    };
    await SkillController.updateSkill(req, res);
    commonExpectsSuccess(res);
  });

  it("deleteSkill", async () => {
    const res = resConfig();
    const req = {
      _id: "id_test",
    };
    await SkillController.deleteSkill(req, res);
    commonExpectsSuccess(res);
  });
});
