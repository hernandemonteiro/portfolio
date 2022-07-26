import Template from "../../components/Template";
import { request } from "../../lib/datocms";
import NavHome from "../../components/NavHome";
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
    let router = useRouter();
    const query = router.query.index;
    console.log(data.allPosts);
    return (
        <Template nav={<NavHome data={data} />}>
            <>
                <h2>{query}</h2>
            </>
            {data.allPosts.map((element, index) => {

                if(element.category === query){
                return (
                    <CardArticle
                        index={index}
                        title={element.title}
                        shortdescription={element.shortdescription}
                        date={element.date}
                        category={element.category}
                    />)}
            })
            }

        </Template>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            `/category/Front-end`,
            // Object variant:
            { params: { index: 'Back-End' } },
        ],
        fallback: false,
    }
}
