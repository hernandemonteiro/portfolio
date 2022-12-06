import SkillsController from "../../../controllers/SkillsController";
import { responseAPI } from "../../../patterns/api/apiCall";

export default async function getSkills(req, res) {
  await responseAPI(
    { method: "GET", requestedMethod: req.method, response: res },
    SkillsController.getSkills(req, res)
  );
}
