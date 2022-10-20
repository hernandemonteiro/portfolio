import React from "react";
import { useRouter } from "next/router";
import { Markup } from "react-render-markup";
import Template from "../../components/UI/Template";
import Menu from "../../components/UI/Menu";

export async function getStaticProps() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/posts`);
  const posts = await data.json();
  return { props: { posts } };
}

export default function Artigo({ posts }) {
  let router = useRouter();
  const query = router.query.index;
  return (
    <Template>
      {posts
        .filter((element) => element.id === query)
        .map((element) => (
          <Markup key={element.id} markup={element.post} />
        ))}
      <Menu />
    </Template>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { index: '1' } }, { params: { index: '2' } }],
    fallback: "blocking",
  }
}