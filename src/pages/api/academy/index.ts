import AcademyController from "../../../controllers/AcademyController";
import { responseAPI } from "../../../patterns/api/apiCall";

export default async function getAll(req, res) {
  await responseAPI(
    { method: "GET", requestedMethod: req.method, response: res },
    AcademyController.getAcademyExperiences(req, res)
  );
}
