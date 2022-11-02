import SkillController from "../../../../back-end/controllers/skills";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createSkills(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const skill = {
    type: query[0],
    skill: query[1],
  };
  checkType(skill.type) &&
  (await adminAccessApi(req.headers["x-admin-access"])) 
  req.method === "POST" &&
  query.length === 2
    ? await SkillController.createSkill(skill, res)
    : res.status(500).end("A");
}

export function checkType(skill): boolean {
  let skillType;
  skill === "Hard-Skill" || skill === "Soft-Skill"
    ? (skillType = true)
    : (skillType = false);
  return skillType;
}
