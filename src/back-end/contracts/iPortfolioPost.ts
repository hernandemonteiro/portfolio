export interface iPortfolioPost {
  getAll();
  getByID(_id: string);
  createPortfolioPost(post: object);
  updatePortfolioPost(post: object);
  deletePortfolioPost(_id: string);
}
