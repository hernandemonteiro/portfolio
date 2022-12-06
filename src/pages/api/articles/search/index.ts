import ArticleController from "../../../../controllers/ArticleController";
import { articleSearchValidate } from "../../../../middlewares/articles/searchValidate";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";

export default async function getPerSearch(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: articleSearchValidate,
    controller: ArticleController.getPerSearch,
    method: "POST",
  });
}
