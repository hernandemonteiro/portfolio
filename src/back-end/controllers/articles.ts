import ArticleService from "../services/articleService";

export class ArticleController {
  async getAll(req, res) {
    try {
      const articles = await ArticleService.getAll();
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getByID(req, res) {
    try {
      const article = await ArticleService.getByID(req._id);
      res.status(200).json(article);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async createArticle(req, res) {
    try {
      const article = {
        title: req.title,
        resume: req.resume,
        content: req.content,
      };
      const newArticle = await ArticleService.createArticle(article);
      res.status(200).json(newArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async updateArticle(req, res) {
    try {
      const article = {
        _id: req._id,
        title: req.title,
        resume: req.resume,
        content: req.content,
      };
      const updatedArticle = await ArticleService.updateArticle(article);
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async deleteArticle(req, res) {
    try {
      const deletedArticle = await ArticleService.deleteArticle(req._id);
      res.status(200).json(deletedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ArticleController();
