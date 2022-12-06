import AcademyController from "../../../../controllers/AcademyController";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { academyUpdateValidate } from "../../../../middlewares/academy/updateValidate";

export default async function updateAcademy(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: academyUpdateValidate,
    controller: AcademyController.updateAcademy,
    method: "POST",
  });
}
