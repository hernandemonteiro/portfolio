export interface iArticleForm {
  onChangeTitle: (e) => void;
  title: string;
  onChangeResume: (e) => void;
  resume: string;
  onChangeContent: (e) => void;
  content: string;
  onChangeIdArticle?: (e) => void;
  idArticle?: string | boolean;
  onSubmit: (e) => void;
}
