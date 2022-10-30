import { describe, it, beforeEach, afterEach } from "@jest/globals";
import PortfolioPostController from "../../../../back-end/controllers/portfolioPosts";
import { commonExpectsFailure, resConfig } from "../../utils/controllers";
import sinon from "sinon";
import PortfolioPostService from "../../../../back-end/services/portfolioPostService";

describe("Portfolio Posts Failure", () => {
  beforeEach(() => {
    sinon.stub(PortfolioPostService, "getAll").rejects(new Error("test"));
    sinon.stub(PortfolioPostService, "getByID").rejects(new Error("test"));
    sinon
      .stub(PortfolioPostService, "createPortfolioPost")
      .rejects(new Error("test"));
    sinon
      .stub(PortfolioPostService, "updatePortfolioPost")
      .rejects(new Error("test"));
    sinon
      .stub(PortfolioPostService, "deletePortfolioPost")
      .rejects(new Error("test"));
  });
  afterEach(() => sinon.restore());
  it("getAll", async () => {
    const res = resConfig();
    await PortfolioPostController.getAll({}, res);
    commonExpectsFailure(res);
  });

  it("getByID", async () => {
    const res = resConfig();
    const req = {};
    await PortfolioPostController.getByID(req, res);
    commonExpectsFailure(res);
  });

  it("createPortfolioPost", async () => {
    const res = resConfig();
    const req = {};
    await PortfolioPostController.createPortfolioPost(req, res);
    commonExpectsFailure(res);
  });

  it("updatePortfolioPost", async () => {
    const res = resConfig();
    const req = {};
    await PortfolioPostController.updatePortfolioPost(req, res);
    commonExpectsFailure(res);
  });

  it("deletePortfolioPost", async () => {
    const res = resConfig();
    const req = {};
    await PortfolioPostController.deletePortfolioPost(req, res);
    commonExpectsFailure(res);
  });
});
