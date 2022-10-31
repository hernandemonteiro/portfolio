import ArticleController from "../../../../back-end/controllers/articles";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function deleteArticle(req, res) {
  Database.dbConnect();
  const id = req.query.id;
  const articleToDelete = {
    _id: id,
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "DELETE"
    ? await ArticleController.deleteArticle(articleToDelete, res)
    : res.status(500).end("Need all correct informations!");
}
