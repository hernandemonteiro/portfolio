import React from "react";
import { useRouter } from "next/router";
import { Markup } from "react-render-markup";
import Template from "../../components/Template";
import Nav from "../../components/Nav";

export async function getServerSideProps(context) {
  const id = context.query.index;
  const data = await fetch(`http://localhost:3000/api/posts/${id}`);
  const posts = await data.json();
  return { props: { posts } };
}

export default function Artigo({ posts }) {
  let router = useRouter();
  const query = router.query.index;
  return (
    <Template nav={<Nav data={posts} />}>
      {posts
        .filter((element) => element.id === query)
        .map((element) => (
          <Markup markup={element.post} />
        ))}
    </Template>
  );
}
