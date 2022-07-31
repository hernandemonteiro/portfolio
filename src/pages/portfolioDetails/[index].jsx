import React from "react";
import { useRouter } from 'next/router';
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Template from "../../components/Template";
import NavPortfolio from "../../components/NavPortfolio";

let query = `allPortfolios(first: $limit) {
    description,
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

export default function Artigo({subscription}) {
    
    const { data } = useQuerySubscription(subscription);

    let router = useRouter();
    const query = router.query.index;
    return (

        <Template nav={<NavPortfolio data={data}/>} >

            {data.allPortfolios.map((element, index) => {

                if (query == index) {

                    return parse(element.description)
                }
            })

            }
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