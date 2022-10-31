import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/UI/Template";
import Menu from "../../components/UI/Menu";

export async function getServerSideProps(context) {
  const post = await fetch(
    `http://localhost:3000/api/articles/getByID/${context.query.id}`
  ).then((res) => res.json());
  return { props: { post } };
}

export default function Artigo({ post }) {
  return (
    <Template>
      <Markup markup={post.content} />
    </Template>
  );
}
