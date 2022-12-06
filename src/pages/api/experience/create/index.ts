import ExperienceController from "../../../../controllers/ExperienceController";
import { experienceCreateValidate } from "../../../../middlewares/experience/createValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function createExperience(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: experienceCreateValidate,
    controller: ExperienceController.createExperience,
    method: "POST",
  });
}
