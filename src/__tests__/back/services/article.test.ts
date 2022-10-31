import { describe, it, expect } from "@jest/globals";
import { articleRepository } from "../../../back-end/repository/article";
import ArticleService from "../../../back-end/services/articleService";
import { sinonMongooseStubs } from "../utils/services";

describe("Article Services", () => {
  sinonMongooseStubs(articleRepository);

  it("getAll", async () => {
    const articles = await ArticleService.getAll();
    expect(articles.status).toBe("success");
  });

  it("getByID", async () => {
    const article = await ArticleService.getByID("test_id");
    expect(article.status).toBe("success");
  });

  it("createArticle", async () => {
    const article = {
      title: "title",
      resume: "resume",
      content: "content",
    };
    const newArticle = await ArticleService.createArticle(article);
    expect(newArticle.status).toBe("success");
  });

  it("updateArticle", async () => {
    const article = {
      _id: "id",
      title: "title",
      resume: "resume",
      content: "content",
    };
    const updatedArticle = await ArticleService.updateArticle(article);
    expect(updatedArticle.status).toBe("success");
  });

  it("deleteArticle", async () => {
    const deletedArticle = await ArticleService.deleteArticle("id");
    expect(deletedArticle.status).toBe("success");
  });
});
