import Database from "../../../back-end/infra/db";
import PortfolioPostController from "../../../back-end/controllers/portfolioPosts";

export default async function getSkills(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await PortfolioPostController.getAll(req, res)
    : res.status(500).end("Need all correct informations!");
}
