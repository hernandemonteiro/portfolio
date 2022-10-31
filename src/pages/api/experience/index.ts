import ExperienceController from "../../../back-end/controllers/experience";
import Database from "../../../back-end/infra/db";

export default async function getExperiences(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await ExperienceController.getAll(req, res)
    : res.status(500).end("Need all correct informations!");
}
