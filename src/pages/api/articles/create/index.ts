import ArticleController from "../../../../controllers/ArticleController";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { articleCreateValidate } from "../../../../middlewares/articles/createValidate";

export default async function createArticle(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: articleCreateValidate,
    controller: ArticleController.createArticle,
    method: "POST",
  });
}
