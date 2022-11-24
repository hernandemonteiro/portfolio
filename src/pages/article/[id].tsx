import React from "react";
import { Markup } from "react-render-markup";
import MenuBlog from "../../components/blog/Menu";
import Template from "../../components/blog/Template";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";

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
      <div style={{textAlign: "center"}}>
        <Markup markup={post.content} />
      </div>
      <MenuBlog />
    </Template>
  );
}
