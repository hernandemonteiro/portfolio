import ArticleController from "../../../back-end/controllers/articles";
import Database from "../../../back-end/infra/db";

export default async function getAll(req, res) {
  Database.dbConnect();
  req.method === "GET"
    ? await ArticleController.getAll(req, res)
    : res.status(500).end("Need all correct informations!");
}
