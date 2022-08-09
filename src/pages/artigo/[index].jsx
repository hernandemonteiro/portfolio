import React from "react";
import { useRouter } from 'next/router';
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { Markup } from "react-render-markup";
import Template from "../../components/Template";
import Nav from "../../components/Nav";

    const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
      allPosts(first: $limit) {
        title,
        shortdescription,
        date,
        category,
        post,
        id
        }
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
            token: process.env.NEXT_PUBLIC_DATO_TOKEN,
          },
        },
      };
    }

export default function Artigo({subscription}) {
    
    const { data } = useQuerySubscription(subscription);

    let router = useRouter();
    const query = router.query.index;
    return (
        <Template nav={<Nav data={data} />} >
            {data.allPosts
            .filter(element => element.id === query)
            .map((element) => <Markup markup={element.post} />)}
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