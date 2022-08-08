import Template from "../../../components/Template";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../../lib/datocms";
import NavPortfolio from "../../../components/NavPortfolio";
import { useRouter } from "next/router";
import CardPortfolio from "../../../components/CardPortfolio";
import usePagination from "../../../Hooks/usePagination";




const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    allPortfolios(first: $limit) {
        title,
        shortdescription,
        description,
        category,
        image1{
          url
        },
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
                token: "59e2d095f8563442f2bb23b25ab172",
            },
        },
    };
}

export default function Category({ subscription }) {
    const { data } = useQuerySubscription(subscription);
    const {
        pagination,
        botaoMostrarMais
    } = usePagination();

    let category = useRouter().query.index;
    return (

        <Template nav={<NavPortfolio data={data} />}>
            <>
                <h2>{category}</h2>
            </>
            {data.allPortfolios.slice(0, pagination).map((element) => {

                if (element.category === category) {
                    return (
                        <CardPortfolio
                            image={element.image1.url}
                            Title={element.title}
                            ShortDescription={element.shortdescription}
                            Category={element.category}
                            id={element.id}

                        />)
                }
            })
            }
            {botaoMostrarMais(data.allPortfolios.filter(element => element.category == category).length)}
        </Template>
    )
}


export async function getStaticPaths() {
    return {
        paths: [
            { params: { index: 'WEB' } },
        ],
        fallback: 'blocking'
    }
}
