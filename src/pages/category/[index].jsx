import Template from "../../components/Template";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import Nav from "../../components/Nav";
import CardArticle from "../../components/CardArticle";
import { useRouter } from "next/router";


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

export default function Category({ subscription }) {
    const { data } = useQuerySubscription(subscription);

    var router = useRouter();
    var query = router.query.index;
        return (
            
            <Template nav={<Nav data={data} />}>
                <>
                    <h2>{query}</h2>
                </>
                {data.allPosts.map((element, index) => {

                    if (element.category === query) {
                        return (
                            <CardArticle
                                index={index}
                                title={element.title}
                                shortdescription={element.shortdescription}
                                date={element.date}
                                category={element.category}
                            />)
                    }
                })
                }

            </Template>
        )
            }


export async function getStaticPaths() {
    return {
        paths: [
            { params: { index: 'Front-end' } },
        ],
        fallback: 'blocking'
    }
}
