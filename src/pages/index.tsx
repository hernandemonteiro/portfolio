import React from "react";
import CardArticle from "../components/ui/Cards/CardArticle";
import usePagination from "../hooks/usePagination";
import Menu from "../components/blog/MenuBlog";
import useArticles from "../hooks/useArticles";
import LoaderAdmin from "../components/ui/Loading";
import Container from "../components/Container";
import Header from "../components/blog/Header";
import Head from "next/head";

export default function Home() {
  const { articlesList } = useArticles();
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <>
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Blog sobre tecnologia e programação! /n Criado para inspirar e te atualizar sobre o mundo do desenvolvimento!"
        />
        <meta name="robots" content="index, follow" />
      </Head>
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
