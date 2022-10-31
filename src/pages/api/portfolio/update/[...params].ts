import PortfolioPostController from "../../../../back-end/controllers/portfolioPosts";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function updatePortfolioPost(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const updatePortfolio = {
    _id: query[0],
    title: query[1],
    resume: query[2],
    content: query[3],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 4
    ? await PortfolioPostController.updatePortfolioPost(updatePortfolio, res)
    : res.status(500).end("Need all correct informations!");
}
