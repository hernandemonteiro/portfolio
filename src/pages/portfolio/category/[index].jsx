import Template from "../../../components/Template";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../../lib/datocms";
import NavPortfolio from "../../../components/NavPortfolio";
import { useRouter } from "next/router";
import CardPortfolio from "../../../components/CardPortfolio";
import usePagination from "../../../Hooks/usePagination";




const QUERY = `query HomePage($limit: IntType) {
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
        query: QUERY,
        variables: { limit: 100 },
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

export default function Category({ subscription }) {
    const { data } = useQuerySubscription(subscription);
    const {
        pagination,
        botaoMostrarMais
    } = usePagination();

    const category = useRouter().query.index;

    return (
        <Template nav={<NavPortfolio data={data} />}>
            <>
                <h2>{category}</h2>
            </>
            {data.allPortfolios
                .filter(element => element.category == category)
                .slice(0, pagination)
                .map((element) => <CardPortfolio
                    image={element.image1.url}
                    Title={element.title}
                    ShortDescription={element.shortdescription}
                    Category={element.category}
                    id={element.id}

                />)}
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
