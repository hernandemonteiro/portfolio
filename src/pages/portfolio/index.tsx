import React from "react";
import Template from "../../components/UI/Template";
import CardPortfolio from "../../components/Portfolio/CardPortfolio";
import usePagination from "../../Hooks/usePagination";
import Menu from "../../components/UI/Menu";

export async function getStaticProps() {
  const dataFetch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/portfolio`
  );
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function portfolio({ data }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <Menu />
    </Template>
  );
}