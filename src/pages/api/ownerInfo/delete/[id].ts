import OwnerInfoController from "../../../../back-end/controllers/ownerInfo";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deleteOwnerInfo(req, res) {
  Database.dbConnect();
  const query = req.query.id;
  const ownerInfo = {
    _id: query,
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "DELETE"
    ? await OwnerInfoController.deleteOwnerInfo(ownerInfo, res)
    : res.status(500).end("Need all correct informations!");
}
