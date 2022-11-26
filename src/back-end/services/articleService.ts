import { iArticle } from "../contracts/iArticle";
import { articleRepository } from "../repository/article";

export class ArticleService implements iArticle {
  async getAll() {
    return await articleRepository.find({});
  }

  async getByID(_id) {
    return await articleRepository.findById(_id);
  }

  async getPerSearch(search: string) {
    return await articleRepository.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { resume: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ],
    });
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
