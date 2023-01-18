import SkillsController from "../../../../controllers/SkillsController";
import { skillsDeleteValidate } from "../../../../middlewares/skills/deleteValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function deleteSkill(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: skillsDeleteValidate,
    controller: SkillsController.deleteSkill,
    method: "DELETE",
  });
}
