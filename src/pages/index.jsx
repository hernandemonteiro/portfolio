import React, { useState } from "react";
import { useQuerySubscription } from "react-datocms";
import Template from "../components/Template";
import Nav from "../components/Nav";
import { request } from "../lib/datocms";
import CardArticle from "../components/CardArticle";
import usePagination from "../Hooks/usePagination";

let query = `allPosts(first: $limit) {
  title,
  shortdescription,
  date,
  category
  }`;

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    ${query}
  }`;

export async function getStaticProps() {

  const graphqlRequest = {
    query: HOMEPAGE_QUERY,
    variables: { limit: 100 },
  };

  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: "59e2d095f8563442f2bb23b25ab172",
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
      {data.allPosts.slice(0, pagination).map((element, index) => {
        return (
          <CardArticle
            index={index}
            title={element.title}
            shortdescription={element.shortdescription}
            date={element.date}
            category={element.category}
          />)
      })}
      {botaoMostrarMais(data.allPosts.length)}
    </Template>
  )
}
