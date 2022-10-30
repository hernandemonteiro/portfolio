import { describe, it, beforeEach, afterEach } from "@jest/globals";
import PortfolioPostController from "../../../../back-end/controllers/portfolioPosts";
import { commonExpectsSuccess, resConfig } from "../../utils/controllers";
import sinon from "sinon";
import PortfolioPostService from "../../../../back-end/services/portfolioPostService";

describe("Portfolio Posts Success", () => {
  beforeEach(() => {
    sinon.stub(PortfolioPostService, "getAll").returns({ status: "success" });
    sinon.stub(PortfolioPostService, "getByID").returns({ status: "success" });
    sinon
      .stub(PortfolioPostService, "createPortfolioPost")
      .returns({ status: "success" });
    sinon
      .stub(PortfolioPostService, "updatePortfolioPost")
      .returns({ status: "success" });
    sinon
      .stub(PortfolioPostService, "deletePortfolioPost")
      .returns({ status: "success" });
  });
  afterEach(() => sinon.restore());
  it("getAll", async () => {
    const res = resConfig();
    await PortfolioPostController.getAll({}, res);
    commonExpectsSuccess(res);
  });

  it("getByID", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await PortfolioPostController.getByID(req, res);
    commonExpectsSuccess(res);
  });

  it("createPortfolioPost", async () => {
    const res = resConfig();
    const req = {
      title: "title_id",
      resume: "resume_test",
      content: "content_test",
    };
    await PortfolioPostController.createPortfolioPost(req, res);
    commonExpectsSuccess(res);
  });

  it("updatePortfolioPost", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
      title: "title_id",
      resume: "resume_test",
      content: "content_test",
    };
    await PortfolioPostController.updatePortfolioPost(req, res);
    commonExpectsSuccess(res);
  });

  it("deletePortfolioPost", async () => {
    const res = resConfig();
    const req = {
      _id: "test_id",
    };
    await PortfolioPostController.deletePortfolioPost(req, res);
    commonExpectsSuccess(res);
  });
});
