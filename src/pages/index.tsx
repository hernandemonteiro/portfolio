import React from "react";
import Template from "../components/UI/Template";
import CardArticle from "../components/Blog/CardArticle";
import usePagination from "../hooks/usePagination";
import Menu from "../components/UI/Menu";

export async function getServerSideProps() {
  const dataFetch = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/posts`);
  const posts = await dataFetch.json();
  return { props: { posts } };
}

export default function Home({ posts }) {
  const { pagination, botaoMostrarMais } = usePagination(5, 5);
  return (
    <Template>
      {posts.slice(0, pagination).map((element) => {
        return (
          <>
            <CardArticle
              index={element.id}
              title={element.title}
              shortdescription={element.shortdescription}
              date={element.date}
              category={element.category}
            />
          </>
        );
      })}
      {botaoMostrarMais(posts.length)}
      <Menu />
    </Template>
  );
}