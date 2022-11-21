import React from "react";
import ArticleTable from "../../../components/admin/Articles/ArticleTable";
import TemplateAdmin from "../../../components/admin/TemplateAdmin";

export default function ArticlesPage() {
  return (
    <TemplateAdmin>
      <ArticleTable />
    </TemplateAdmin>
  );
}
