import SkillController from "../../../../back-end/controllers/skills";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deleteSkill(req, res) {
  Database.dbConnect();
  const id = req.query.id;
  const skillToDelete = {
    _id: id,
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "DELETE"
    ? await SkillController.deleteSkill(skillToDelete, res)
    : res.status(500).end("Need all correct informations!");
}
