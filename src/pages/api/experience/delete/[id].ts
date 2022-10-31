import ExperienceController from "../../../../back-end/controllers/experience";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deleteExperience(req, res) {
  Database.dbConnect();
  const query = req.query.id;
  const experience = {
    _id: query,
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "DELETE"
    ? await ExperienceController.deleteExperience(experience, res)
    : res.status(500).end("Need all correct informations!");
}
