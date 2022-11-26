import React, { useEffect, useState } from "react";
import Template from "../components/blog/TemplateBlog";
import CardArticle from "../components/ui/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import { fetchAPI } from "../hooks/helpers/fetchAPI";
import Menu from "../components/blog/MenuBlog";
import useArticles from "../hooks/useArticles";

export default function Home() {
  const { articlesList } = useArticles();
  const { pagination, botaoMostrarMais } = usePagination(3, 3);

  return (
    <Template>
      {articlesList.slice(0, pagination).map((element) => {
        return (
          <CardArticle
            key={element._id}
            route={"/article/" + element._id}
            title={element.title}
            shortdescription={element.resume}
          />
        );
      })}
      {botaoMostrarMais(articlesList.length)}
      <Menu />
    </Template>
  );
}
