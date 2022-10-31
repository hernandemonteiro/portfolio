import { iPortfolioPost } from "../contracts/iPortfolioPost";
import { portfolioPostRepository } from "../repository/portfolioPost";

export class PortfolioPostService implements iPortfolioPost {
  async getAll() {
    return await portfolioPostRepository.find({});
  }

  async getByID(_id: string) {
    return await portfolioPostRepository.findById(_id);
  }

  async createPortfolioPost(post) {
    return await portfolioPostRepository.create({
      title: post.title,
      resume: post.resume,
      content: post.content,
    });
  }

  async updatePortfolioPost(post) {
    return await portfolioPostRepository.findByIdAndUpdate(post._id, {
        title: post.title,
        resume: post.resume,
        content: post.content,
      });
  }

  async deletePortfolioPost(_id: string) {
    return await portfolioPostRepository.findByIdAndDelete(_id);
  }
}

export default new PortfolioPostService();
