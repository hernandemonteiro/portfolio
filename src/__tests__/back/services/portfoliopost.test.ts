import { describe, it, expect } from "@jest/globals";
import { portfolioPostRepository } from "../../../back-end/repository/portfolioPost";
import PortfolioPostService from "../../../back-end/services/portfolioPostService";
import { sinonMongooseStubs } from "../utils/services";
describe("portfolioPost services", () => {
  sinonMongooseStubs(portfolioPostRepository);
  it("getAll", async () => {
    const allposts = await PortfolioPostService.getAll();
    expect(allposts.status).toBe("success");
  });

  it("getByID", async () => {
    const postByID = await PortfolioPostService.getByID("id_test");
    expect(postByID.status).toBe("success");
  });

  it("createPortfolioPost", async () => {
    const post = {
      title: "title_test",
      resume: "resume_test",
      content: "content_test",
    };
    const newPost = await PortfolioPostService.createPortfolioPost(post);
    expect(newPost.status).toBe("success");
  });
  it("updatePortfolioPost", async () => {
    const post = {
      _id: "id_test",
      title: "title_test",
      resume: "resume_test",
      content: "content_test",
    };
    const updatedPost = await PortfolioPostService.updatePortfolioPost(post);
    expect(updatedPost.status).toBe("success");
  });
  it("deletePortfolioPost", async () => {
    const updatedPost = await PortfolioPostService.deletePortfolioPost(
      "id_test"
    );
    expect(updatedPost.status).toBe("success");
  });
});
