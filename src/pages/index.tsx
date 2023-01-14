import React from "react";
import TemplateBlog from "../components/blog/TemplateBlog";
import CardArticle from "../components/ui/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import Menu from "../components/blog/MenuBlog";
import useArticles from "../hooks/useArticles";

export default function Home() {
  const { articlesList } = useArticles();
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  return (
    <TemplateBlog>
      {Object.keys(articlesList[0]).length > 0 ? (
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
      ) : (
        <div
          style={{
            height: "65vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}
      {/* <Menu /> */}
    </TemplateBlog>
  );
}
