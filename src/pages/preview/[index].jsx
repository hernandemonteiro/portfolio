import React from "react";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { Markup } from "react-render-markup";
import Template from "../../components/Template";
  
    const QUERY = `query Preview($limit: IntType) {
      preview{
        post
      }
    }`;
  
    export async function getStaticProps() {
  
      const graphqlRequest = {
        query: QUERY,
        variables: { limit: 5 },
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
    const preview = data.allPreviews[0];
    return (
        <Template >
            <Markup markup={preview.post} />
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