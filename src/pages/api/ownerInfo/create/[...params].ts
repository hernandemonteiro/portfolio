import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createOwnerInfo(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const ownerInfo = {
    picture: query[0],
    name: query[1],
    email: query[2],
    birthday: query[3],
    title: query[4],
    resume: query[5],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 6
    ? await OwnerInfoController.createOwnerInfo(ownerInfo, res)
    : res.status(500).end("Need all correct informations!");
}
