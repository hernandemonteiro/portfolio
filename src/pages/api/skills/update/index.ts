import SkillsController from "../../../../controllers/SkillsController";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { skillsUpdateValidate } from "../../../../middlewares/skills/updateValidate";

export default async function updateSkills(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: skillsUpdateValidate,
    controller: SkillsController.updateSkill,
    method: "POST",
  });
}
