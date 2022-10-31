import AcademyController from "../../../../back-end/controllers/academy";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function updateAcademy(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const academy = {
    _id: query[0],
    title: query[1],
    foundation: query[2],
    since: query[3],
    status: query[4],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 5
    ? await AcademyController.updateAcademy(academy, res)
    : res.status(500).end("Need all correct informations!");
}
