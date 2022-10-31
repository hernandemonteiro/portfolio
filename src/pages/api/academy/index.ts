import AcademyController from "../../../back-end/controllers/academy";
import Database from "../../../back-end/infra/db";

export default async function getAll(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await AcademyController.getAll(req, res)
    : res.status(500).end("Need all correct informations!");
}
