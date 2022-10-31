import ExperienceController from "../../../../back-end/controllers/experience";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createExperience(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const experience = {
    title: query[0],
    company: query[1],
    since: query[2],
    until: query[3],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 4
    ? await ExperienceController.createExperience(experience, res)
    : res.status(500).end("Need all correct informations!");
}
