import PortfolioPostService from "../services/portfolioPostService";

export class PortfolioPostController {
  async getAll(req, res) {
    try {
      const allPosts = await PortfolioPostService.getAll();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getByID(req, res) {
    try {
      const post = await PortfolioPostService.getByID(req._id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async createPortfolioPost(req, res) {
    try {
      const post = {
        title: req.title,
        resume: req.resume,
        content: req.content,
      };
      const createdPost = await PortfolioPostService.createPortfolioPost(post);
      res.status(200).json(createdPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePortfolioPost(req, res) {
    try {
      const post = {
        _id: req._id,
        title: req.title,
        resume: req.resume,
        content: req.content,
      };
      const updatedPost = await PortfolioPostService.updatePortfolioPost(post);
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletePortfolioPost(req, res) {
    try {
      const deletedPost = await PortfolioPostService.deletePortfolioPost(req._id);
      res.status(200).json(deletedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PortfolioPostController();
