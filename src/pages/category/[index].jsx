import Template from "../../components/Template";
import { request } from "../../lib/datocms";
import Nav from "../../components/Nav";
import CardArticle from "../../components/CardArticle";
import { useRouter } from "next/router";


const QUERY = `query Category($limit: IntType) {
  allPosts(first: $limit) {
    title,
    shortdescription,
    date,
    category
    }
}`;
export async function getStaticProps() {
    const data = await request({
        query: QUERY,
        variables: { limit: 5 }
    });
    return {
        props: { data }
    };
}

export default function Category({ data }) {
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
