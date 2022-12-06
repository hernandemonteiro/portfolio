import ExperienceController from "../../../controllers/ExperienceController";
import { responseAPI } from "../../../patterns/api/apiCall";

export default async function getExperiences(req, res) {
  await responseAPI(
    { method: "GET", requestedMethod: req.method, response: res },
    ExperienceController.getExperiences(req, res)
  );
}
