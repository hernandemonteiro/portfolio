import { describe, it, beforeEach, afterEach } from "@jest/globals";
import ArticleController from "../../../../back-end/controllers/articles";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import sinon from "sinon";
import ArticleService from "../../../../back-end/services/articleService";
describe("Article controllers failure", () => {
  beforeEach(() => {
    sinon.stub(ArticleService, "getAll").rejects(new Error("test"));
    sinon.stub(ArticleService, "getByID").rejects(new Error("test"));
    sinon.stub(ArticleService, "createArticle").rejects(new Error("test"));
    sinon.stub(ArticleService, "updateArticle").rejects(new Error("test"));
    sinon.stub(ArticleService, "deleteArticle").rejects(new Error("test"));
  });
  afterEach(() => sinon.restore());
  it("getAll", async () => {
    const res = resConfig();
    await ArticleController.getAll({}, res);
    commonExpectsFailure(res);
  });
  it("getByID", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await ArticleController.getByID(req, res);
    commonExpectsFailure(res);
  });
  it("createArticle", async () => {
    const res = resConfig();
    const req = {
      title: "test_title",
      resume: "resume_test",
      content: "content_test",
    };
    await ArticleController.createArticle(req, res);
    commonExpectsFailure(res);
  });
  it("updateArticle", async () => {
    const res = resConfig();
    const req = {
      _id: "id_test",
      title: "test_title",
      resume: "resume_test",
      content: "content_test",
    };
    await ArticleController.updateArticle(req, res);
    commonExpectsFailure(res);
  });
  it("deleteArticle", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await ArticleController.deleteArticle(req, res);
    commonExpectsFailure(res);
  });
});
