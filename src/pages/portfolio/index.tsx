import React from "react";
import Template from "../../components/blog/Template";
import usePagination from "../../hooks/usePagination";
import CardArticle from "../../components/ui/Cards/CardArticle";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps() {
  const portfolio = await fetchAPI("/api/portfolio", "GET");
  return { props: { portfolio } };
}

export default function portfolio({ portfolio }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pagination, botaoMostrarMais } = usePagination(5, 5);

  return (
    <Template>
      {portfolio.slice(0, pagination).map((element) => {
        return (
            <CardArticle
              key={element._id}
              title={element.title}
              shortdescription={element.resume}
              route={"/portfolioDetail/" + element._id}
            />
        );
      })}
      {botaoMostrarMais(portfolio.length)}
    </Template>
  );
}
