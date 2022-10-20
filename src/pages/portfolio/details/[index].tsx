import React from "react";
import { useRouter } from "next/router";
import { Markup } from "react-render-markup";
import Template from "../../../components/UI/Template";
import Menu from "../../../components/UI/Menu";

export async function getStaticProps() {
  const dataFetch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API}/api/portfolio`
  );
  const data = await dataFetch.json();
  return { props: { data } };
}

export default function protfolioDetails({ data }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const query = useRouter().query.index;

  return (
    <Template>
      {data
        .filter((element) => element.id == query)
        .map((element) => (
          <Markup key={element.id} markup={element.description} />
        ))}
      <Menu />
    </Template>
  );
}

export async function getStaticPaths() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/portfolio`)

  const posts = await res.json()

  const ways = posts.map((post) => ({
      params: { id: post.id },
  }))
}