import AcademyController from "../../../../back-end/controllers/academy";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deleteAcademy(req, res) {
  Database.dbConnect();
  const query = req.query.id;
  const academy = {
    _id: query,
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "DELETE"
    ? await AcademyController.deleteAcademy(academy, res)
    : res.status(500).end("Need all correct informations!");
}
