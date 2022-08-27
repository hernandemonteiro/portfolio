import React, { useState } from "react";
import { useQuerySubscription } from "react-datocms";
import Template from "../components/Template";
import { request } from "../lib/datocms";
import Nav from "../components/Nav";
import CardArticle from "../components/CardArticle";
import usePagination from "../Hooks/usePagination";

const QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit,
    orderBy: [title_ASC]) {
    title,
    shortdescription,
    date,
    category,
    id
    }
  }`;

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

export default function Home({ subscription }) {
  const {
    pagination,
    botaoMostrarMais
  } = usePagination();
  const { data } = useQuerySubscription(subscription);

  return (
    <Template nav={<Nav data={data} />} >
      {data.allPosts.slice(0, pagination).map((element) => {
        return (
          <>
          <CardArticle
            index={element.id}
            title={element.title}
            shortdescription={element.shortdescription}
            date={element.date}
            category={element.category}
          />
          </>)
      })}
      {botaoMostrarMais(data.allPosts.length)}
    </Template>
  )
}
