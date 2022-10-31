import ArticleController from "../../../../back-end/controllers/articles";
import Database from "../../../../back-end/infra/db";

export default async function getAll(req, res) {
  Database.dbConnect();
  const id = {
    _id: req.query.id,
  };
  req.method === "GET"
    ? await ArticleController.getByID(id, res)
    : res.status(500).end("Need all correct informations!");
}
