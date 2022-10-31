import PortfolioPostController from "../../../../back-end/controllers/portfolioPosts";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createPortfolioPost(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const newPortfolio = {
    title: query[0],
    resume: query[1],
    content: query[2],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 3
    ? await PortfolioPostController.createPortfolioPost(newPortfolio, res)
    : res.status(500).end("Need all correct informations!");
}
