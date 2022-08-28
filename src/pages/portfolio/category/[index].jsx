import Template from "../../../components/Template";
import NavPortfolio from "../../../components/NavPortfolio";
import { useRouter } from "next/router";
import CardPortfolio from "../../../components/CardPortfolio";
import usePagination from "../../../Hooks/usePagination";




export async function getServerSideProps() {
    const dataFetch = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/portfolio`);
    const data = await dataFetch.json();
    return { props: { data } };
  }

export default function portfolioCategory({ data }) {
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
            {data
                .filter(element => element.category == category)
                .slice(0, pagination)
                .map((element) => <CardPortfolio
                    Title={element.title}
                    ShortDescription={element.shortdescription}
                    Category={element.category}
                    id={element.id}

                />)}
            {botaoMostrarMais(data.filter(element => element.category == category).length)}
        </Template>
    )
}
