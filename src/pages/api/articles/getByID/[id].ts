import ArticleController from "../../../../controllers/ArticleController";
import { responseAPI } from "../../../../patterns/api/apiCall";

export default async function getAll(req, res) {
  await responseAPI(
    { method: "GET", requestedMethod: req.method, response: res },
    ArticleController.getByID(req, res)
  );
}
