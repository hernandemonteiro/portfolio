import OwnerInfoController from "../../../back-end/controllers/ownerInfo";
import Database from "../../../back-end/infra/db";

export default async function getOwnerInfo(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await OwnerInfoController.getOwnerInfo(req, res)
    : res.status(500).end("Need all correct informations!");
}
