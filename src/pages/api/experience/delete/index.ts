import ExperienceController from "../../../../controllers/ExperienceController";
import { experienceDeleteValidate } from "../../../../middlewares/experience/deleteValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function deleteExperience(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: experienceDeleteValidate,
    controller: ExperienceController.deleteExperience,
    method: "DELETE",
  });
}
