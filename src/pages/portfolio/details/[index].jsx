import React from "react";
import { useRouter } from 'next/router';
import { Markup } from "react-render-markup";
import Template from "../../../components/Template";
import NavPortfolio from "../../../components/NavPortfolio";


export async function getServerSideProps() {
  const dataFetch = await fetch(process.env.NEXT_PUBLIC_URL_API + "/api/portfolio");
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function protfolioDetails({ data }) {

  const query = useRouter().query.index;

  return (
    <Template nav={<NavPortfolio data={data} />} >
      {data
        .filter(element => element.id == query)
        .map((element) => <Markup markup={element.description} />)}
    </Template>
  )
}
