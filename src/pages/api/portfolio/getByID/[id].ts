import PortfolioPostController from "../../../../back-end/controllers/portfolioPosts";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deletePortfolioPost(req, res) {
  Database.dbConnect();
  const portfolioPost = {
    _id: req.query.id,
  };
  req.method === "GET"
    ? await PortfolioPostController.getByID(portfolioPost, res)
    : res.status(500).end("Need all correct informations!");
}
