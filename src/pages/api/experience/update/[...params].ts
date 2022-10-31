import ExperienceController from "../../../../back-end/controllers/experience";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function updateExperience(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const experience = {
    _id: query[0],
    title: query[1],
    company: query[2],
    since: query[3],
    until: query[4],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 5
    ? await ExperienceController.updateExperience(experience, res)
    : res.status(500).end("Need all correct informations!");
}
