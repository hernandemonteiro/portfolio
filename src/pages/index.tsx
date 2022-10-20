import React from "react";
import Template from "../components/UI/Template";
import CardArticle from "../components/Blog/CardArticle";
import usePagination from "../Hooks/usePagination";
import Menu from "../components/UI/Menu";

export async function getStaticProps() {
  const dataFetch = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/posts`);
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function Home({ data }) {
  const { pagination, botaoMostrarMais } = usePagination();
  return (
    <Template>
      {data.slice(0, pagination).map((element) => {
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
      {botaoMostrarMais(data.length)}
      <Menu />
    </Template>
  );
}
