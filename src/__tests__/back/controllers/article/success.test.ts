import { describe, it, beforeEach, afterEach } from "@jest/globals";
import ArticleController from "../../../../back-end/controllers/articles";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";
import sinon from "sinon";
import ArticleService from "../../../../back-end/services/articleService";
describe("Article controllers success", () => {
  beforeEach(() => {
    sinon.stub(ArticleService, "getAll").returns({ status: "success" });
    sinon.stub(ArticleService, "getByID").returns({ status: "success" });
    sinon.stub(ArticleService, "createArticle").returns({ status: "success" });
    sinon.stub(ArticleService, "updateArticle").returns({ status: "success" });
    sinon.stub(ArticleService, "deleteArticle").returns({ status: "success" });
  });
  afterEach(() => sinon.restore());
  it("getAll", async () => {
    const res = resConfig();
    await ArticleController.getAll({}, res);
    commonExpectsSuccess(res);
  });
  it("getByID", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await ArticleController.getByID(req, res);
    commonExpectsSuccess(res);
  });
  it("createArticle", async () => {
    const res = resConfig();
    const req = {
      title: "test_title",
      resume: "resume_test",
      content: "content_test",
    };
    await ArticleController.createArticle(req, res);
    commonExpectsSuccess(res);
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
    commonExpectsSuccess(res);
  });
  it("deleteArticle", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await ArticleController.deleteArticle(req, res);
    commonExpectsSuccess(res);
  });
});
