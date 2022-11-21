import ArticleController from "../../../../back-end/controllers/articles";
import Database from "../../../../back-end/infra/db";

export default async function getPerSearch(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await ArticleController.getPerSearch(req.query.search, res)
    : res.status(500).end("Need all correct informations!");
}
