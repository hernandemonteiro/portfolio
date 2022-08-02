import React from "react";
import { useRouter } from 'next/router';
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Template from "../../components/Template";
import Nav from "../../components/Nav";

let query = `allPosts(first: $limit) {
    title,
    shortdescription,
    date,
    category,
    post,
    id
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

export default function Artigo({subscription}) {
    
    const { data } = useQuerySubscription(subscription);

    let router = useRouter();
    const query = router.query.index;
    return (

        <Template nav={<Nav data={data} />} >
            {data.allPosts.map((element) => {
              console.log(element.id)
                if (query === element.id) {

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