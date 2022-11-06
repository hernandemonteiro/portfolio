import React from "react";
import { Markup } from "react-render-markup";
import MenuBlog from "../../components/blog/Menu";
import Template from "../../components/blog/Template";
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
      <MenuBlog />
    </Template>
  );
}