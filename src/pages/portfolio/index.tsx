import React from "react";
import Template from "../../components/Template";
import CardPortfolio from "../../components/CardPortfolio";
import usePagination from "../../Hooks/usePagination";

export async function getServerSideProps() {
  const dataFetch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/portfolio`
  );
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function portfolio({ data }) {
  const { pagination, botaoMostrarMais } = usePagination();

  return (
    <Template>
      {data.slice(0, pagination).map((element) => {
        return (
          <CardPortfolio
            key={element.id}
            Title={element.title}
            ShortDescription={element.shortdescription}
            Category={element.category}
            id={element.id}
          />
        );
      })}
      {botaoMostrarMais(data.length)}
    </Template>
  );
}
