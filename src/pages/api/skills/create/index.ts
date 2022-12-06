import SkillsController from "../../../../controllers/SkillsController";
import { skillCreateValidate } from "../../../../middlewares/skills/createValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function createSkills(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: skillCreateValidate,
    controller: SkillsController.createSkill,
    method: "POST",
  });
}
