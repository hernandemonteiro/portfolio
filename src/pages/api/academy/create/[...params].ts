import AcademyController from "../../../../back-end/controllers/academy";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createAcademy(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const academy = {
    title: query[0],
    foundation: query[1],
    since: query[2],
    status: query[3],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 4
    ? await AcademyController.createAcademy(academy, res)
    : res.status(500).end("Need all correct informations!");
}
