import ArticleController from "../../../../back-end/controllers/articles";
import Database from "../../../../back-end/infra/db";
import { adminAccessApi } from "../../../../back-end/security/admin.acess";

export default async function createExperience(req, res) {
  Database.dbConnect();
  const query = req.query.params;
  const article = {
    _id: query[0],
    title: query[1],
    resume: query[2],
    content: query[3],
  };
  (await adminAccessApi(req.headers["x-admin-access"])) &&
  req.method === "POST" &&
  query.length === 4
    ? await ArticleController.updateArticle(article, res)
    : res.status(500).end("Need all correct informations!");
}
