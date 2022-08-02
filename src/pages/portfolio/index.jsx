import React from "react";
import { useQuerySubscription } from "react-datocms";
import Template from "../../components/Template";
import NavPortfolio from "../../components/NavPortfolio";
import { request } from "../../lib/datocms";
import CardPortfolio from "../../components/CardPortfolio";
import usePagination from "../../Hooks/usePagination";

let query = `allPortfolios(first: $limit) {
  title,
  shortdescription,
  description,
  category,
  image1{
    url
  }
  }`;

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    ${query}
  }`;

export async function getStaticProps() {

  const graphqlRequest = {
    query: HOMEPAGE_QUERY,
    variables: { limit: 5 },
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
  const { data } = useQuerySubscription(subscription);
  const {
    pagination,
    botaoMostrarMais
  } = usePagination();

  return (
    <Template nav={<NavPortfolio data={data}/>} >
      
      {data.allPortfolios.slice(0, pagination).map((element, index) => {
        return (
          <CardPortfolio
            image={element.image1.url}
            Title={element.title}
            ShortDescription={element.shortdescription}
            Category={element.category}
            id={index}

          />
        )
      })
      }
      {botaoMostrarMais(data.allPortfolios.length)}
    </Template>
  )
}
