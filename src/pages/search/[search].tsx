import React from "react";
import Template from "../../components/blog/Template";
import CardArticle from "../../components/ui/Cards/CardArticle";
import usePagination from "../../hooks/usePagination";
import { fetchAPI } from "../../helpers/fetchAPI";
import Menu from "../../components/blog/Menu";

export async function getServerSideProps(context) {
  const { search } = context.params;
  const posts = await fetchAPI(`/api/articles/search/${search}`, "GET");
  return { props: { posts } };
}

export default function Home({ posts }) {
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <Template>
      {posts.slice(0, pagination).map((element) => {
        return (
          <CardArticle
            key={element._id}
            route={"/article/" + element._id}
            title={element.title}
            shortdescription={element.resume}
          />
        );
      })}
      {botaoMostrarMais(posts.length)}
      <Menu />
    </Template>
  );
}
