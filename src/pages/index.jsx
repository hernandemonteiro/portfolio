import React from "react";
import { useQuerySubscription } from "react-datocms";
import Template from "../components/Template";
import Nav from "../components/Nav";
import { request } from "../lib/datocms";
import CardArticle from "../components/CardArticle";

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
  
  return (
    <Template nav={<Nav data={data} />} >

      {data.allPosts.map((element, index) => {
        return(
          <CardArticle
            index={index}
            title={element.title}
            shortdescription={element.shortdescription}
            date={element.date}
            category={element.category}
          />)
      })
      }
      
    </Template>
  )
}
