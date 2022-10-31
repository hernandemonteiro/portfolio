export interface iArticle {
  getAll();
  getByID(_id);
  createArticle(article: object);
  updateArticle(article: object);
  deleteArticle(_id);
}
