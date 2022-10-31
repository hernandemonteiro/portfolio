import Database from "../../../back-end/infra/db";
import SkillController from "../../../back-end/controllers/skills";

export default async function getSkills(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await SkillController.getAll(req, res)
    : res.status(500).end("Need all correct informations!");
}
