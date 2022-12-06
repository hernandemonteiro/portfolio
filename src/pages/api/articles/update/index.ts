import ArticleController from "../../../../controllers/ArticleController";
import { apiCallPatternFormat } from "../../../../patterns/api/apiCall";
import { articleUpdateValidate } from "../../../../middlewares/articles/updateValidate";

export default async function createExperience(req, res) {
  await apiCallPatternFormat(req, res, {
    validate: articleUpdateValidate,
    controller: ArticleController.updateArticle,
    method: "POST",
  });
}
