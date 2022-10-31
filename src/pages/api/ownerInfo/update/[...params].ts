import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function updateOwnerInfo(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const ownerInfo = {
    _id: query[0],
    picture: query[1],
    name: query[2],
    email: query[3],
    birthday: query[4],
    title: query[5],
    resume: query[6],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 7
    ? await OwnerInfoController.updateOwnerInfo(ownerInfo, res)
    : res.status(500).end("Need all correct informations!");
}
