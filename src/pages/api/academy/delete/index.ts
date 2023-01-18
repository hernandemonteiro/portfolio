import AcademyController from "../../../../controllers/AcademyController";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { academyDeleteValidate } from "../../../../middlewares/academy/deleteValidate";

export default async function deleteAcademy(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: academyDeleteValidate,
    controller: AcademyController.deleteAcademy,
    method: "DELETE",
  });
}
