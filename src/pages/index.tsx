import React from "react";
import TemplateBlog from "../components/blog/TemplateBlog";
import CardArticle from "../components/ui/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import Menu from "../components/blog/MenuBlog";
import useArticles from "../hooks/useArticles";
import LoaderAdmin from "../components/ui/Loading";

export default function Home() {
  const { articlesList } = useArticles();
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <>
      {Object.keys(articlesList[0]).length > 0 ? (
        <Menu>
          <TemplateBlog>
            <>
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
            </>
          </TemplateBlog>
        </Menu>
      ) : (
        <LoaderAdmin />
      )}
    </>
  );
}
