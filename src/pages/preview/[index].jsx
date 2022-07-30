import React from "react";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Template from "../../components/Template";
import Nav from "../../components/Nav";

let query = `allPreviews(first: $limit) {
  title,
  shortdescription,
  date,
  category,
  post
  }`;
  
    const PREVIEW_QUERY = `query HomePage($limit: IntType) {
      ${query}
    }`;
  
    export async function getStaticProps() {
  
      const graphqlRequest = {
        query: PREVIEW_QUERY,
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

    return (

        <Template nav={<Nav data={data} />} >
            {data.allPreviews.map((element, index) => {

                if (query == index) {

                    return parse(element.post)
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