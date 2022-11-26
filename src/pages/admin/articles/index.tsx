import React from "react";
import ArticleTable from "../../../components/admin/Articles/ArticleTable";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";
import useArticles from "../../../hooks/useArticles";

export default function ArticlesPage() {
  const { articlesList } = useArticles();
  return (
    <TemplateAdmin>
      <ArticleTable articles={articlesList} />
    </TemplateAdmin>
  );
}
