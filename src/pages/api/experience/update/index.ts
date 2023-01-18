import ExperienceController from "../../../../controllers/ExperienceController";
import { experienceUpdateValidate } from "../../../../middlewares/experience/updateValidate";
import { requestFormater } from "../../../../patterns/api/requestFormater";
import { responseAPI } from "../../../../patterns/api/apiCall";

export default async function updateExperience(req, res) {
  const formatedReq = await requestFormater(req);
  await experienceUpdateValidate(formatedReq, res);

  await responseAPI(
    { method: "POST", requestedMethod: req.method, response: res },
    ExperienceController.updateExperience(formatedReq, res)
  );
}
