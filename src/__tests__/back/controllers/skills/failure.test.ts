import { describe, it, beforeEach, afterEach } from "@jest/globals";
import SkillController from "../../../../back-end/controllers/skills";
import SkillService from "../../../../back-end/services/skillsService";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import sinon from "sinon";

describe("Skills Controllers", () => {
  beforeEach(() => {
    sinon.stub(SkillService, "getAll").rejects(new Error("test"));
    sinon.stub(SkillService, "createSkill").rejects(new Error("test"));
    sinon.stub(SkillService, "updateSkill").rejects(new Error("test"));
    sinon.stub(SkillService, "deleteSkill").rejects(new Error("test"));
  });
  afterEach(() => {
    sinon.restore();
  });
  it("getAll", async () => {
    const res = resConfig();
    const req = {};
    await SkillController.getAll(req, res);
    commonExpectsFailure(res);
  });

  it("createSkill", async () => {
    const res = resConfig();
    const req = {
      type: "type",
      skill: "skill",
    };
    await SkillController.createSkill(req, res);
    commonExpectsFailure(res);
  });

  it("updateSkill", async () => {
    const res = resConfig();
    const req = {
      _id: "_id",
      type: "type",
      skill: "skill",
    };
    await SkillController.updateSkill(req, res);
    commonExpectsFailure(res);
  });

  it("deleteSkill", async () => {
    const res = resConfig();
    const req = {
      _id: "id_test",
    };
    await SkillController.deleteSkill(req, res);
    commonExpectsFailure(res);
  });
});
