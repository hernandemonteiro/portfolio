export interface iArticle {
  getAll();
  getByID(_id: string);
  createArticle(article: object);
  updateArticle(article: object);
  deleteArticle(_id: string);
}
