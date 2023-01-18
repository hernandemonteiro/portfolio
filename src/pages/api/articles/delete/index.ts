import ArticleController from "../../../../controllers/ArticleController";
import { articleDeleteValidate } from "../../../../middlewares/articles/deleteValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function deleteArticle(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: articleDeleteValidate,
    controller: ArticleController.deleteArticle,
    method: "DELETE",
  });
}
