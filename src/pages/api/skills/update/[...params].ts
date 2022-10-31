import SkillController from "../../../../back-end/controllers/skills";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";
import { checkType } from "../create/[...params]";

export default async function updateSkills(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const skill = {
    _id: query[0],
    type: query[1],
    skill: query[2],
  };
  checkType(skill.type) &&
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 3
    ? await SkillController.updateSkill(skill, res)
    : res.status(500).end("Need all correct informations!");
}
