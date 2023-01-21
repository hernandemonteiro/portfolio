import React from "react";
import TemplateBlog from "../components/blog/TemplateBlog";
import CardArticle from "../components/ui/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import Menu from "../components/blog/MenuBlog";
import useArticles from "../hooks/useArticles";
import LoaderAdmin from "../components/ui/Loading";
import Container from "../components/Container";
import Header from "../components/blog/Header";

export default function Home() {
  const { articlesList } = useArticles();
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <>
      {Object.keys(articlesList[0]).length > 0 ? (
        <Menu>
          <Container Header={<Header />}>
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
          </Container>
        </Menu>
      ) : (
        <LoaderAdmin />
      )}
    </>
  );
}
