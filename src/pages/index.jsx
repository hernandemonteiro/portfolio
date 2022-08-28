import React, { useEffect, useState } from "react";
import Template from "../components/Template";
import Nav from "../components/Nav";
import CardArticle from "../components/CardArticle";
import usePagination from "../Hooks/usePagination";

export async function getServerSideProps() {
  const dataFetch = await fetch("http://localhost:3000/api/posts/posts");
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function Home({ data }) {
  const { pagination, botaoMostrarMais } = usePagination();
  return (
    <Template nav={<Nav data={data} />}>
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
    </Template>
  );
}
