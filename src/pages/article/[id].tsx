import React from "react";
import { Markup } from "react-render-markup";
import Menu from "../../components/blog/MenuBlog";
import Template from "../../components/blog/TemplateBlog";
import Head from "next/head";
import { fetchAPI } from "../../patterns/api/fetchAPI";
import { iArticlePage } from "../../interfaces/iArticlePage";

export async function getServerSideProps(context) {
  const articleID = await context.query.id;
  const post = await fetchAPI(`/api/articles/getByID/${articleID}`, "GET");

  return { props: { post } };
}

export default function Artigo({ post }: iArticlePage) {
  return (
    <Menu>
      <Template>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.resume} />
          <meta name="robots" content="index, nofollow" />
        </Head>
        <div style={{ width: "70vw", wordWrap: "break-word" }}>
          <Markup markup={post.content} />
        </div>
      </Template>
    </Menu>
  );
}
