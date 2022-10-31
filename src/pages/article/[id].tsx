import React from "react";
import { Markup } from "react-render-markup";
import Template from "../../components/UI/Template";
import Menu from "../../components/UI/Menu";
import { fetchAPI } from "../../helpers/fetchAPI";

export async function getServerSideProps(context) {
  const post = await fetchAPI(
    `/api/articles/getByID/${context.query.id}`,
    "GET"
  );

  return { props: { post } };
}

export default function Artigo({ post }) {
  return (
    <Template>
      <Markup markup={post.content} />
    </Template>
  );
}
