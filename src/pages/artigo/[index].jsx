import React from "react";
import { useRouter } from 'next/router';
import { request } from "../../lib/datocms";
import parse from 'html-react-parser';
import Template from "../../components/Template";
import NavArticle from "../../components/NavArticle";

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
        props: { data }
    };
}


export default function Artigo({ data }) {

    let router = useRouter();
    const query: any = router.query.index;

        return (
            <Template nav={<NavArticle data={data} />}>
                {  data.allPosts.map((element, index) => {
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
            // String variant:
            `/artigo/0`,
            // Object variant:
            { params: { index: '1' } },
        ],
        fallback: true,
    }
}