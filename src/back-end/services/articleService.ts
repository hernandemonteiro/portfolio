import { iArticle } from "../contracts/iArticle";
import { articleRepository } from "../repository/article";

export class ArticleService implements iArticle {
  async getAll() {
    return await articleRepository.find({});
  }

  async getByID(_id) {
    return await articleRepository.findById(_id);
  }

  async createArticle(article) {
    return await articleRepository.create({
      title: article.title,
      resume: article.resume,
      content: article.content,
    });
  }

  async updateArticle(article) {
    return await articleRepository.findByIdAndUpdate(article._id, {
      title: article.title,
      resume: article.resume,
      content: article.content,
    });
  }

  async deleteArticle(_id) {
    return await articleRepository.findByIdAndDelete(_id);
  }
}

export default new ArticleService();
