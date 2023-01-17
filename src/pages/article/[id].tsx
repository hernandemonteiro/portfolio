import React from "react";
import { Markup } from "react-render-markup";
import MenuBlog from "../../components/blog/MenuBlog";
import Template from "../../components/blog/TemplateBlog";
import { fetchAPI } from "../../hooks/helpers/fetchAPI";

export async function getServerSideProps(context) {
  const post = await fetchAPI(
    `/api/articles/getByID/${context.query.id}`,
    "GET"
  );

  return { props: { post } };
}

interface iArtigo {
  post: {
    content: string;
  };
}

export default function Artigo({ post }: iArtigo) {

  return (
    <Template>
      <div style={{ width: "70vw", wordWrap: "break-word" }}>
        <Markup markup={post.content} />
      </div>
      <MenuBlog />
    </Template>
  );
}
