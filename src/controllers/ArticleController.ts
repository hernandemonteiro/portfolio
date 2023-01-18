import { ArticleRepository } from "../models/article";
import { responseController } from "../patterns/controllers/responseController";

export class ArticleController {
  async getArticles(req, res) {
    const articles = await ArticleRepository.find({});
    await responseController(articles, articles, res);
  }

  async getByID(req, res) {
    const articleByID = await ArticleRepository.findById(req.query.id);
    await responseController(articleByID, articleByID, res);
  }

  async getPerSearch(req, res) {
    const { search } = req.body;
    const searchedArticles = await ArticleRepository.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { resume: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ],
    });

    await responseController(searchedArticles, searchedArticles, res);
  }

  async createArticle(req, res) {
    const { title, resume, content } = req.body;
    const newArticle = await ArticleRepository.create({
      title,
      resume,
      content,
    });

    await responseController(newArticle, { _id: newArticle._id }, res);
  }

  async updateArticle(req, res) {
    const { _id, title, resume, content } = req.body;
    const updatedArticle = await ArticleRepository.findByIdAndUpdate(_id, {
      title,
      resume,
      content,
    });

    await responseController(updatedArticle, { _id: updatedArticle._id }, res);
  }

  async deleteArticle(req, res) {
    const deletedArticle = await ArticleRepository.findByIdAndDelete(
      await req.body._id
    );

    await responseController(deletedArticle, { _id: deletedArticle._id }, res);
  }
}

export default new ArticleController();
