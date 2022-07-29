import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Template from "../../components/Template";
import Nav from "../../components/Nav";

const ARTIGO_QUERY = `query Artigo($limit: IntType) {
    allPosts(first: $limit) {
      category,
      post
      }
  }`;
  
  export async function getStaticProps() {

    const data = await request({
            query: ARTIGO_QUERY,
            variables: { limit: 10 }
        });
    return {
        props: {data}
    };
    
  }

export default function Artigo({data}) {
    let router = useRouter();
    const query = router.query.index;
    return (
        <Template nav={<Nav data={data} />} >
            {data.allPosts.map((element, index) => {

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