import AcademyController from "../../../../controllers/AcademyController";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { academyCreateValidate } from "../../../../middlewares/academy/createValidate";

export default async function createAcademy(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: academyCreateValidate,
    controller: AcademyController.createAcademy,
    method: "POST",
  });
}
