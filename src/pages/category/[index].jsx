import Template from "../../components/Template";
import { useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import Nav from "../../components/Nav";
import CardArticle from "../../components/CardArticle";
import usePagination from "../../Hooks/usePagination";
import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const dataFetch = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/posts`);
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function Category({ data }) {
  const category = useRouter().query.index;

  const { pagination, botaoMostrarMais } = usePagination();

  return (
    <Template nav={<Nav data={data} />}>
      <>
        <h2>{category}</h2>
      </>
      {data.slice(0, pagination).map((element) => {
        if (element.category == category) {
          return (
            <CardArticle
              index={element.id}
              title={element.title}
              shortdescription={element.shortdescription}
              date={element.date}
              category={element.category}
            />
          );
        }
      })}
      {botaoMostrarMais(
        data.filter((element) => element.category == category).length
      )}
    </Template>
  );
}
