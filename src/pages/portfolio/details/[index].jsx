import React from "react";
import { useRouter } from 'next/router';
import { useQuerySubscription } from "react-datocms";
import { request } from "../../../lib/datocms";
import { Markup } from "react-render-markup";
import Template from "../../../components/Template";
import NavPortfolio from "../../../components/NavPortfolio";


const QUERY = `query Article($limit: IntType) {
  allPortfolios(first: $limit) {
    description,
    category,
    id}}`;

export async function getStaticProps() {

  const graphqlRequest = {
    query: QUERY,
    variables: { limit: 100 },
  };

  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_PUBLIC_DATO_TOKEN,
      },
    },
  };
}

export default function Artigo({ subscription }) {

  const { data } = useQuerySubscription(subscription);
  const query = useRouter().query.index;

  return (
    <Template nav={<NavPortfolio data={data} />} >
      {data.allPortfolios
        .filter(element => element.id == query)
        .map((element) => <Markup markup={element.description} />)}
    </Template>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { index: '0' } },
    ],
    fallback: 'blocking'
  }
}